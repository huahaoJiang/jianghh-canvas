import { ToolOptions } from '..'
import { Rect } from './Rect'
// 线
export const FillRect = {
  ...Rect,
  pointermove(event) {
    Rect.pointermove?.call(this, event)
    this.bufferCtx?.fill()
  },
  pointerup(event) {
    Rect.pointerup?.call(this, event)
    this.ctx?.fill()
  }
} as ToolOptions
