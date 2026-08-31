export const mapEnumKeys = (
  elEnum: object,
  trim?: number,
): Record<string, any> => {
  let arr = Object.keys(elEnum)

  if (trim) {
    arr = arr.slice(0, trim)
  }

  return arr.reduce<Record<string, any>>((acc, member) => {
    acc[member] = member
    return acc
  }, {})
}

export const removeUnusedEnumKeyValue = (
  elEnum: object,
  unusedEnumKeys: string[],
): Record<string, any> => {
  const newObj: Record<string, any> = {}
  const keys = Object.keys(elEnum).filter(key => {
    return !unusedEnumKeys.includes(key)
  })
  keys.forEach(key => (newObj[key] = (elEnum as Record<string, any>)[key]))
  return newObj
}
