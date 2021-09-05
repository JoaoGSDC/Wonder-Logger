/* eslint @typescript-eslint/explicit-module-boundary-types: "off" */

export const capitalize = (
  [first, ...rest]: any,
  city?: boolean
): string | undefined => {
  if (first) {
    if (city) {
      return first.toUpperCase() + rest.join('').toLowerCase()
    }

    return first.toUpperCase() + rest.join('').toLowerCase()
  }
}

export const capitalizeAll = (text: string | undefined): string | undefined => {
  return text?.toLowerCase().replace(/^.|\s\S/g, function (a) {
    return a.toUpperCase()
  })
}
