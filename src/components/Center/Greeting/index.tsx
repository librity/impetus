import { useContext, useState } from 'react'

import { NameCtx } from '@/contexts/Name'
import DynamicGreeting from './DynamicGreeting'
import { InputChangeEvent, FormSubmit } from '@/interfaces/htmlEvents'
import styles from '@/styles/Center.module.css'

export const Greeting = () => {
  const { name, saveName } = useContext(NameCtx)

  const [nameInput, setNameInput] = useState('')

  const handleNameChange = (e: InputChangeEvent) => {
    setNameInput(e.target.value)
  }

  const handleNameSave: FormSubmit = e => {
    e.preventDefault()

    saveName(nameInput)
  }

  if (!name)
    return (
      <form className={styles.hidden} onSubmit={handleNameSave}>
        <input
          className={styles.center_input}
          onChange={handleNameChange}
          value={nameInput}
          placeholder="What is your name?"
          type="text"
          required
          maxLength={15}
        />
      </form>
    )

  return <DynamicGreeting />
}

export default Greeting
