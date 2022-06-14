import React from 'react'
import styles from './Item.module.scss'

const Item = ({linkIcon,count,charactor,textInfo}) => {
  return (
    <div className={styles.item}>
        <div className={styles.imageInfo}>
            <img src={linkIcon} alt = "" />
        </div>
        <div className={styles.numberInfo}>
            <div className={styles.count}>{count}</div>
            <div className={styles.charactor}>{charactor}</div>
        </div>
        <div className={styles.textInfo}>
            {textInfo}
        </div>
    </div>
  )
}

export default Item