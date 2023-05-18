export const getProgressColor = (width: number) => {
  switch (Math.round(width / 10)) {
    case 0:
      return '#005000'
    case 1:
      return '#006000'
    case 2:
      return '#007000'
    case 3:
      return '#008000'
    case 4:
      return '#009000'
    case 5:
      return '#00A000'
    case 6:
      return '#00B000'
    case 7:
      return '#00C000'
    default:
      return '#00CC00'
  }
}
