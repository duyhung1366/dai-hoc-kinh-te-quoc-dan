import React from 'react'
import styles from './Title.module.scss'

const Title = ({title, line2 = ""}) => {
  return (
    <div className={styles.titles}>
        {title} <br></br> {line2}
    </div>
  )
}

export default Title