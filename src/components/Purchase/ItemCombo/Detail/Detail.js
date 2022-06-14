import clsx from 'clsx';
import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai";
import styles from './Detail.module.scss'

const Detail = ({text}) => {
  return (
    <div className={clsx('d-flex', styles.detail)}>
        <div className={styles.icon}><AiFillCheckCircle /></div>
        <div className={styles.text}>{text}</div>
    </div>
  )
}

export default Detail