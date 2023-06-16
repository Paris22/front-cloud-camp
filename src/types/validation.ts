import { Sex } from "@/enums/validation"

export type TSex = Lowercase<keyof typeof Sex>
