import { InputType } from "@/enums/input"
import { Sex } from "@/enums/validation"

export const SEX_OPTIONS = [
  { value: Sex.Man, label: Sex.Man, id: "field-sex-option-man" },
  { value: Sex.Woman, label: Sex.Woman, id: "field-sex-option-woman" }
]

export const TEXT_INPUTS_FIRST_STEP = [
  {
    name: "nickname",
    label: "Nickname",
    type: InputType.Text
  },
  {
    name: "name",
    label: "Name",
    type: InputType.Text
  },
  {
    name: "surname",
    label: "Surname",
    type: InputType.Text
  }
]

export const CHECKBOX_GROUP_FIELDS = [
  {
    label: "1",
    value: "1",
    id: "field-checkbox-group-option-1"
  },
  {
    label: "2",
    value: "2",
    id: "field-checkbox-group-option-2"
  },
  {
    label: "3",
    value: "3",
    id: "field-checkbox-group-option-3"
  }
]

export const RADIO_GROUP_FIELDS = [
  { label: "1", value: "1", id: "field-radio-group-option-1" },
  { label: "2", value: "2", id: "field-radio-group-option-2" },
  { label: "3", value: "3", id: "field-radio-group-option-3" }
]
