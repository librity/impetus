import { GoMarkGithub } from 'react-icons/go'

import styles from '@/styles/Right.module.css'

export const Github = () => {
  return (
    <a
      className={styles.github_link}
      href="https://github.com/librity/impetus"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.github_container}>
        <GoMarkGithub size={36} />
      </span>
    </a>
  )
}

export default Github
