import { SubmitHandler } from "react-hook-form"
import { useModal } from "./useModal"
import { TFormDataState } from "@/types/form"
import { formApi } from "@/store/services/subApies/form"

const useSendForm = () => {
  const [sendForm, { isLoading: isLoadingSendForm }] =
    formApi.useSendFormMutation()
  const { showSuccessModal, showErrorModal } = useModal()

  const handleSendForm: SubmitHandler<Partial<TFormDataState>> = async (
    formData: Partial<TFormDataState>,
    event
  ) => {
    event?.preventDefault()

    try {
      await sendForm(formData).unwrap()
      showSuccessModal()
    } catch (err) {
      showErrorModal()
    }
  }

  return { handleSendForm, isLoadingSendForm }
}

export default useSendForm
