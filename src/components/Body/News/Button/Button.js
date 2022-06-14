import React from 'react'
import styles from './Button.module.scss'

const Button = () => {
  return (
    <div className={styles.link}>
        <a href='https://onthisinhvien.com/tin-tuc' target="_blank" rel="noreferrer" className={styles.button}>xem thêm</a>
    </div>
  )
}

export default Button