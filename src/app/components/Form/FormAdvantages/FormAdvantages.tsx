import { FC } from "react"
import FormTextInput from "../FormComponents/FormInputs/FormTextInput/FormTextInput"
import PlusIcon from "@assets/plus.svg"
import DeleteIcon from "@assets/deleteIcon.svg"
import { Control, DeepMap, FieldError, FieldValues } from "react-hook-form"
import Button from "../../Button/Button"
import style from "./formAdvantages.module.scss"
import { InputType } from "@/enums/input"

type FormAdvantagesProps = {
  advantages: Array<Record<"id", string>>
  control: Control
  actions: {
    append: (value: { advantage: string }) => void
    remove: (index: number) => void
  }
  errors: DeepMap<FieldValues, FieldError>
}

const FormAdvantages: FC<FormAdvantagesProps> = ({
  advantages,
  control,
  actions,
  errors
}) => {
  const { append, remove } = actions
  const handleAddAdvantage = () => append({ advantage: "" })
  const handleRemoveAdvantage = (advantageIndex: number) =>
    remove(advantageIndex)

  return (
    <div>
      <div className={style.container}>
        <label className={style.label} htmlFor={`advantages`}>
          Advantages
        </label>
        {advantages.map((advantage, index) => (
          <div key={advantage.id} className={style.field}>
            <FormTextInput
              id={`field-advantages-${index + 1}`}
              control={control}
              isTipRequired={false}
              name={`advantages.${index}.advantage`}
              type={InputType.Text}
              errors={errors}
            />
            <button
              className={style.deleteButton}
              id={`button-remove-${index + 1}`}
              type="button"
              onClick={() => handleRemoveAdvantage(index)}
            >
              <img className={style.img} src={DeleteIcon} alt="delete-icon" />
            </button>
          </div>
        ))}
      </div>
      <Button
        id="button add"
        type="button"
        onClick={handleAddAdvantage}
        variant="outlined"
      >
        <img className={style.img} src={PlusIcon} alt="plus-icon" />
      </Button>
    </div>
  )
}

export default FormAdvantages
