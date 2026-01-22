import { DateRange } from "react-day-picker";

export type PresetKey =
  | "this_month"
  | "last_month"
  | "this_year"
  | "last_12_months";

export type PeriodSelectorType = "preset" | "custom";

export type PeriodSelectorState =
  | { type: "preset"; preset: PresetKey }
  | { type: "custom"; range?: DateRange; open: boolean };
