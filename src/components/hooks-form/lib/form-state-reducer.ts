import { ActionType, FormStateType } from "./form-type";

export function formStateReducer(state: FormStateType, { field, value }: ActionType) {
  return {
    ...state,
    [field]: value,
  }
}
