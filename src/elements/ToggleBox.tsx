import React from 'react'
import { clsx } from 'clsx'
import { useThemeContext } from '@context/theme-context'
import { clickInteraction } from '@helpers/tracking'

const ToggleBox = () => {
  const { isDark, onChangeTheme } = useThemeContext()

  return (
    <input
      type="checkbox"
      className={clsx(
        'appearance-none cursor-pointer relative w-16 h-8 rounded-full transition-colors duration-300 outline-none',
        // Track background/border simulation (Emotion: ::before)
        'before:absolute before:w-16 before:h-8 before:rounded-full before:flex before:items-center before:transition-colors before:duration-300',
        'before:pl-2 before:justify-start before:content-["🌞"] before:text-[1.2rem] before:bg-text-2 before:text-border-color',
        // Knob (Emotion: ::after)
        'after:absolute after:block after:content-[""] after:w-[1.6rem] after:h-[1.6rem] after:rounded-full after:bg-background-default after:text-text-2 after:transition-all after:duration-200 after:ease-in-out',
        'after:top-[0.2rem] after:left-[2.2rem] after:shadow-[0_2px_4px_rgba(0,0,0,0.2),0_0_2px_rgba(0,0,0,0.1)]',

        // Checked State
        'checked:before:w-16 checked:before:h-8 checked:before:pr-2 checked:before:justify-end checked:before:content-["🌛_"] checked:before:bg-text-2',
        'checked:after:bg-white checked:after:text-white checked:after:z-10',
        'checked:after:left-[0.2rem]',
      )}
      onChange={() => {
        onChangeTheme()
        clickInteraction('theme-toggle')
      }}
      checked={isDark}
    />
  )
}

export default ToggleBox
