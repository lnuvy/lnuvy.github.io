/**
 * 2024.08.15 변경된 github breakpoint 반영
 */
const deviceSizes = {
  tablet: 768,
  pc: 1012,
}

const mediaQuery = {
  mobile: `screen and (max-width: ${deviceSizes.tablet - 1}px)`,
  tablet: `screen and (max-width: ${deviceSizes.pc - 1}px)`,
}

export default mediaQuery
