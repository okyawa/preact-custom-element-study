import { FormActionType, FormStateType } from "./form-type";

export function formStateReducer(state: FormStateType, { field, value }: FormActionType) {
  return {
    ...state,
    [field]: value,
  }
}
