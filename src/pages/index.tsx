import { useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import styles from '@/styles/index.module.scss'

const useStyles = makeStyles(_ => ({
  root: {
    '& > *': {
      color: '#fff !important'
      // 'border-bottom': '2px solid #fff !important'
    },
    '& input': {
      'border-bottom': '2px solid #fff !important',
      'font-size': '1.2rem'
      // 'font-size': '2rem;'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled)::before': {
      'border-bottom': '2px solid #fff !important'
    },
    '& .MuiInput-underline::after': {
      'border-bottom': '4px solid #a75bf0 !important'
    }
  }
}))

const Auth = (): JSX.Element => {
  const classes = useStyles()
  const profileImage = useRef<HTMLImageElement>(document.createElement('img'))

  const handleImageChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    const imageToUpload = target.files?.item(0) as Blob

    const reader = new FileReader()
    if (profileImage.current) {
      reader.onload = e => {
        profileImage.current.src = e?.target?.result as string
        profileImage.current.style.opacity = '1'
      }
    }

    reader.readAsDataURL(imageToUpload)
  }
  return (
    <div className={styles.container}>
      <div className={styles['auth-container']}>
        <form className={styles['auth-form-wrapper']}>
          <div className={styles['auth-form-profile-image-wrapper']}>
            <img
              src=""
              ref={profileImage}
              className={styles['auth-form-profile-image-preview']}
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/save-icon.svg`}
              className={styles['auth-form-profile-image-save-icon']}
            />
            <input
              type="file"
              accept=".png, .jpg"
              onChange={handleImageChange}
            />
          </div>
          <div className={styles['auth-input-wrapper']}>
            <TextField
              label="Nome"
              helperText="Insira seu nome"
              required
              color="primary"
              className={`${classes.root} ${styles.input}`}
            />
          </div>
          <div className={styles['auth-input-wrapper']}>
            <TextField
              label="Interesses"
              className={`${classes.root} ${styles.input}`}
            />
          </div>
          <button className={styles['auth-form-button']}>ENTRAR</button>
        </form>
      </div>
      <div className={styles.separator}></div>
      <div className={styles['svg-wrapper']}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/index_chat.svg`}
          alt="svg"
          className={styles['svg-woman-chat']}
        />
      </div>
    </div>
  )
}

export default Auth
