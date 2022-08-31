const _getChunksFromString = (st: string, chunkSize: number) => {
  return st.match(new RegExp(`.{${chunkSize}}`, 'g'))
}

const _hexUnitTo256 = (hex: string) => {
  return parseInt(hex.repeat(2 / hex.length), 16)
}
const getAlphafloat = (a: number, alpha: number) => {
  if (typeof a !== 'undefined') {
    return a / 255
  }
  if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
    return 1
  }
  return alpha
}

export const hexToRgba = (hex: string, alpha: number) => {
  const hexRgx = /^#([A-Fa-f0-9]{3,4}){1,2}$/

  if (!hexRgx.test(hex)) {
    throw new Error('Invalid Hex Color')
  }

  const chunkSize = Math.floor((hex.length - 1) / 3)
  const hexArr = _getChunksFromString(hex.slice(1), chunkSize)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [r, g, b, a] = hexArr!.map(_hexUnitTo256)

  return [r, g, b, getAlphafloat(a, alpha)]
}
