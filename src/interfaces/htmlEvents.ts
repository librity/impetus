import { ChangeEventHandler, FormEventHandler } from 'react'

export interface InputChange extends ChangeEventHandler<HTMLInputElement> {}

export interface FormSubmit extends FormEventHandler<HTMLFormElement> {}
