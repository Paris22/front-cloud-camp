import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, useFieldArray } from "react-hook-form"
import useFormNavigate from "@/hooks/useFormNavigate"
import { TSecondStepFormData } from "@/types/form"
import RadioGroup from "../../FormComponents/FormGroups/FormRadioGroup/FormRadioGroup"
import CheckboxGroup from "../../FormComponents/FormGroups/FormCheckboxGroup/FormCheckboxGroup"
import { secondStepFormSchema } from "@/helpers/validationSchemas/secondStepFormSchema"
import FormAdvantages from "../../FormAdvantages/FormAdvantages"
import Button from "@/app/components/Button/Button"
import style from "./secondStep.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { formSelector, secondStepForm } from "@/store/reducers/form/form"
import {
  CHECKBOX_GROUP_FIELDS,
  RADIO_GROUP_FIELDS
} from "@/helpers/constants/form"

const SecondStep = () => {
  const dispatch = useAppDispatch()
  const { advantages, checkboxGroup, radioGroup } = useAppSelector(formSelector)
  const { handleToNextStep, handleToPreviousStep } = useFormNavigate()
  const {
    control,
    getValues,
    setValue,
    formState: { errors, isValid }
  } = useForm<Partial<TSecondStepFormData>>({
    resolver: yupResolver(secondStepFormSchema),
    mode: "onChange",
    defaultValues: {
      advantages: advantages || [],
      checkboxGroup: checkboxGroup || [],
      radioGroup: radioGroup || 0
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages"
  })

  const handleSubmitToStep = (isNextStep: boolean) => {
    const data = getValues()
    dispatch(secondStepForm(data))
    isNextStep ? handleToNextStep() : handleToPreviousStep()
  }

  return (
    <form>
      <div className={style.form}>
        <FormAdvantages
          advantages={fields}
          control={control}
          actions={{ append, remove }}
          errors={errors}
        />
        <CheckboxGroup
          name="checkboxGroup"
          label="Checkbox group"
          options={CHECKBOX_GROUP_FIELDS}
          control={control}
          setValue={setValue}
          errors={errors}
        />
        <RadioGroup
          name="radioGroup"
          label="Radio group"
          options={RADIO_GROUP_FIELDS}
          control={control}
          errors={errors}
        />
      </div>
      <div className={style.buttons}>
        <Button
          id="button-back"
          type="button"
          onClick={() => handleSubmitToStep(false)}
          variant="outlined"
        >
          Назад
        </Button>
        <Button
          id="button-next"
          type="button"
          onClick={() => handleSubmitToStep(true)}
          disabled={!isValid}
        >
          Далее
        </Button>
      </div>
    </form>
  )
}

export default SecondStep
