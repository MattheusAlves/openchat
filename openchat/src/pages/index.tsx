import React, { useRef, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { RiFileUserFill as UserFileIcon } from 'react-icons/ri'
import { connect } from 'react-redux'

import styles from '@/styles/index.module.scss'
import Birds from '@/components/birds'
import personalInterestsJson from '../../personal-interests.json'
import Interests from '@/components/interests'

// redux setup
import { bindActionCreators, Dispatch } from 'redux'
import * as InterestActions from '@/store/ducks/interest/actions'
import * as UserActions from '@/store/ducks/user/actions'
import { ApplicationState } from '@/store'

const useStyles = makeStyles(_ => ({
  root: {
    '& > *': {
      color: '#fff !important'
    },
    '& input': {
      'font-size': '1.2rem'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled)::before': {
      'border-bottom': '2px solid #fff !important'
    },
    '& .MuiInput-underline:not(.Mui-disabled)::before': {
      'border-bottom': '2px solid #ccc !important'
    },
    '& .MuiInput-underline::after': {
      'border-bottom': '4px solid #a75bf0 !important'
    }
  }
}))

const Auth = (props): JSX.Element => {
  const [name, setName] = useState<string>('')
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
  const handleInterestChange = (event, value): void => {
    if (value) {
      props.addInterest(value)
    }
  }
  const handleSubmit = (e): void => {
    e.preventDefault()
    props.logonUser(name)
  }
  return (
    <div className={styles.container}>
      <Birds />
      <div className={styles['auth-container']}>
        <form className={styles['auth-form-wrapper']} onSubmit={handleSubmit}>
          <div className={styles['auth-form-profile-image-wrapper']}>
            <img
              src=""
              ref={profileImage}
              className={styles['auth-form-profile-image-preview']}
            />
            <UserFileIcon
              size={50}
              className={styles['auth-form-profile-image-save-icon']}
            />
            <input
              type="file"
              accept=".png, .jpg"
              onChange={handleImageChange}
            />
          </div>
          <Interests />
          <div className={styles['auth-input-wrapper']}>
            <TextField
              label="Nome"
              required
              color="primary"
              value={name}
              onChange={e => setName(e.target.value)}
              className={`${classes.root} ${styles.input}`}
            />
          </div>
          <div className={styles['auth-input-wrapper']}>
            <Autocomplete
              className={`${classes.root} ${styles.input} ${styles.autoComplete}`}
              options={personalInterestsJson.data}
              getOptionLabel={interest => interest.title}
              onChange={handleInterestChange}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Interesses"
                  helperText="Selecione até três interesses"
                  className={`${classes.root} ${styles.input}`}
                />
              )}
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

const mapStateToProps = (state: ApplicationState) => ({
  ...state
})
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...InterestActions, ...UserActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
