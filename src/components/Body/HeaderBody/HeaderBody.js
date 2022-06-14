import styles from'./HeaderBody.module.css'; 

import React from 'react'
import clsx from 'clsx';

const HeaderBody = () => {
  return (
    <div className={clsx('row',styles.headerBody)}>
        <div className={clsx(styles.item)}>
            <span>Tôi được A, Bạn cũng có thể</span>
            <div className={clsx(styles.totalMember, styles.item)}>
                <img src='https://onthisinhvien.com/resources/images/otsv/icon-listmember.svg' alt='' />
                <b>20.000</b>
                "học viên"
            </div>
        </div>
    </div>
  )
}

export default HeaderBody;