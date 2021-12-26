import { FormEventHandler } from 'react'

export interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

export interface FormSubmit extends FormEventHandler<HTMLFormElement> {}
