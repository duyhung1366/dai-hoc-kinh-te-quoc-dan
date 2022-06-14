import React from 'react'
import styles from './FooterDownload.module.scss';

const FooterDownload = ({link}) => {
  return (
    <div className={styles.footerDownload}>
        <img src= {link} alt = ''/>
    </div>
  )
}

export default FooterDownload