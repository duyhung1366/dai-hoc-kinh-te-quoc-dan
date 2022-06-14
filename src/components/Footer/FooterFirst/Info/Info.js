import styles from './Info.module.scss'

import {React } from 'react'

const Info = ({link = '', text}) => {
  

  return (
    <div className={styles.info}>
      <a href={link} className={link === '' ? 'disabled' : ''} target = '_blank' rel="noreferrer">{text}</a>
    </div>
  )
}

export default Info