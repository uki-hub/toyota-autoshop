export type Sizing =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;

export type FlexMainAxisAlingment =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "space-between"
  | "around"
  | "evently"
  | "strecth"
  | undefined;

export type FlexCrossAxisAlingment =
  | "start"
  | "end"
  | "center"
  | "baseline"
  | "strecth"
  | undefined;

export type Size = {
  width?: number | string | undefined;
  height?: number | string | undefined;
}
