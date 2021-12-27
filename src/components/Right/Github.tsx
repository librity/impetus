import Image from 'next/image'

import githubIcon from '@/public/icons/github.svg'
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
        <Image src={githubIcon} alt="" width={36} height={36} />
      </span>
    </a>
  )
}

export default Github
