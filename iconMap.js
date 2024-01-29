export const ICON_MAP = new Map()

addMapping([0, 1], "Sol")
addMapping([2], "Delvis molnigt")
addMapping([3], "Molnigt")
addMapping([45, 48], "Dimmigt")
addMapping(
  [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  "Regn"
)
addMapping([71, 73, 75, 77, 85, 86], "Snö")
addMapping([95, 96, 99], "Åska")

function addMapping(values, icon) {
  values.forEach(value => {
    ICON_MAP.set(value, icon)
  })
}