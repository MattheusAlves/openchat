import styles from '@/styles/index.module.scss'

const Auth = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles['auth-wrapper']}></div>
      <div className={styles.separator}></div>
    </div>
  )
}

export default Auth
