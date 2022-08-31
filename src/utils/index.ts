/** Convert a hex color to three js color format */
export const toThreeColor = (color: string) => Number(`0x${color.substring(1)}`)

export * from './color'
