- **Description**: A `useScrollSpy` hook that continuously tracks the visible sections of a page and updates the URL hash for better navigation and SEO.
- **Problem**: Long single-page apps (SPAs) often have sections that correspond to specific content. Users want direct links to specific parts (deep linking) and navigation highlights. Navigating manually (with query params or page reloads) is not smooth.
- **Solution**: Use `IntersectionObserver` to efficiently detect which section is currently visible in the viewport and update the URL silently with `history.replaceState()`.

## Implementation Details

### Core Principles

- Monitor all elements matching a selector (e.g., specific section tags or classes).
- Use `IntersectionObserver` to trigger updates only when visibility changes, avoiding costly scroll event listeners.
- Use `history.replaceState` instead of `window.location.hash` to update the URL without adding entries to the browser history or causing page jumps.

### React Hook Example

The hook should:

1. Accept a list of section IDs or a selector.
2. Initialize an `IntersectionObserver`.
3. Track the active section state.
4. Clean up observers on unmount.

### Usage Example

```tsx
import useScrollSpy from './useScrollSpy'

const MyComponent = () => {
  const activeId = useScrollSpy(['section1', 'section2', 'section3'], { offset: 100 })

  return (
    <>
      <nav>
        <a href="#section1" className={activeId === 'section1' ? 'active' : ''}>
          Section 1
        </a>
        ...
      </nav>
      <section id="section1">...</section>
      ...
    </>
  )
}
```
