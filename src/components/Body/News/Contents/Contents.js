import clsx from 'clsx'
import React from 'react'
import styles from './Contents.module.scss'
const Contents = ({title,linkImg,date}) => {
  return (
    <div className={clsx("col l-4 m-4 c-6")}>
        <div className={styles.contents}>
        <div className={styles.itemImg}>
            <img src={linkImg} alt ="" />
        </div>
        <div className={styles.info}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.date}>
                {date}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contents