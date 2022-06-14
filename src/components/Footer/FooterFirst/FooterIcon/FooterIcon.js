import React from 'react'
import styles from './FooterIcon.module.css'

const FooterIcon = ({linka,linksrc}) => {
  return (
    <div className={styles.icon}>
        <a href={linka} target ='_blank' rel ="noreferrer">
            <img src={linksrc} className={styles.img} alt=''/>
        </a>
    </div>
  )
}

export default FooterIcon