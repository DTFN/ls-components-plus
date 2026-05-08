export interface TracePoint {
  x: number
  t: number
}

export interface CaptchaSelectPayload {
  dragPercent: number
  durationMs: number
  trace: TracePoint[]
}
