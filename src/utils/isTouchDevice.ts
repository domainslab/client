/* eslint-disable @typescript-eslint/ban-ts-comment */

export const isTouchDevice = (): boolean =>
  //@ts-ignore
  'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
