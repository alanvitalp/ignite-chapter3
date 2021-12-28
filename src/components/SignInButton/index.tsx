import React from 'react'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'


export const SignInButton = () => {
  const { data: session } = useSession();

  console.log(session)

  return session ? (
    <button type="button" className={styles.signInButton} onClick={() => signOut()}>
      <FaGithub color="#04d361"/>
      Alan Vital
      <FiX color="#747480" className={styles.closeIcon} />
    </button>
    ) : (
    <button type="button" className={styles.signInButton} onClick={() => signIn('github')}>
      <FaGithub color="#eba417"/>
      Sign in with Github 
    </button>
  )
}
