import styles from './Title.module.scss' ;

import React from 'react'

const Title = ({text}) => {
  return (
    <div className={styles.title}>{text}</div>
  )
}

export default Title