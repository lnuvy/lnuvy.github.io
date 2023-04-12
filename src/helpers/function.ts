export const getProgressColor = (width: number) => {
  switch (Math.round(width / 10)) {
    case 0:
    case 1:
    case 2:
      return '#0e4429'
    case 3:
    case 4:
    case 5:
      return '#006d32'
    case 6:
    case 7:
    case 8:
      return '#26a641'
    default:
      return '#39d353'
  }
}
