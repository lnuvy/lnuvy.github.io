import { useEffect, useState, useRef } from 'react'

/**
 * useScrollSpy Hook
 * Tracks which section is currently in view and updates the URL hash.
 *
 * @param {string[]} ids - Array of section IDs to observer
 * @param {object} options - IntersectionObserver options (root, rootMargin, threshold)
 * @returns {string} activeId - The ID of the currently visible section
 */
export const useScrollSpy = (ids: string[]) => {
  const [activeId, setActiveId] = useState<string>('')
  const activeIdRef = useRef<string>('')
  const observer = useRef<IntersectionObserver | null>(null)
  const ratios = useRef<Map<string, number>>(new Map())

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const elements = ids.map((id) => document.getElementById(id))

    if (observer.current) {
      observer.current.disconnect()
    }

    // Reset ratios on mount/ids change
    ratios.current.clear()

    // Use a single observer for all elements
    observer.current = new IntersectionObserver(
      (entries) => {
        // Update ratios for changed elements
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id')
          if (id) {
            ratios.current.set(id, entry.intersectionRatio)
          }
        })

        // Find the element with maximum visibility
        let maxId = ''
        let maxRatio = 0

        for (const [id, ratio] of Array.from(ratios.current.entries())) {
          if (ratio > maxRatio) {
            maxRatio = ratio
            maxId = id
          }
        }

        // Only update if we have a winner, it's different from current, and it has meaningful visibility
        // > 0.1 prevents switching to a section that is barely entering
        if (maxId && maxId !== activeIdRef.current && maxRatio > 0.1) {
          activeIdRef.current = maxId
          setActiveId(maxId)

          const newUrl = `${window.location.pathname}#${maxId}`
          window.history.replaceState(null, '', newUrl)
        }
      },
      {
        root: null,
        // Focus on the top-center part of the screen for activation
        rootMargin: '-10% 0px -50% 0px',
        // Dense thresholds to ensure we capture ratio changes accurately for the "winner" logic
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
      },
    )

    elements.forEach((el) => {
      if (el) observer.current?.observe(el)
    })

    return () => observer.current?.disconnect()
  }, [ids])

  return activeId
}

export default useScrollSpy
