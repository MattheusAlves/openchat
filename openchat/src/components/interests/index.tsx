import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AiFillCloseCircle as Close } from 'react-icons/ai'

import * as InterestActions from '@/store/ducks/interest/actions'
import { ApplicationState } from '@/store'

import styles from '@/styles/components/interests.module.scss'
import { InterestData, InterestState } from '@/store/ducks/interest/types'

interface DispatchProps {
  removeInterest(interest: InterestData): void
  addInterest(interest: InterestData): void
}
type Props = InterestState & DispatchProps

function Interests(props: Props): JSX.Element {
  return (
    <div className={styles['interests-container']}>
      {props.interests.map(interest => (
        <span key={interest.id} className={styles.interest}>
          {interest.title}
          <Close size={22} onClick={() => props.removeInterest(interest)} />
        </span>
      ))}
    </div>
  )
}
const mapStateToProps = (state: ApplicationState) => ({
  ...state.interestState
})
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(InterestActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Interests)
