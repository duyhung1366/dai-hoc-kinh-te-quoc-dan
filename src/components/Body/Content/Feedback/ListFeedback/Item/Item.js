import clsx from 'clsx'
import React from 'react'
import styles from './Item.module.scss'

const Item = ({linkImg}) => {
  return (
    <div className= {clsx('col l-3 c-6 m-3', styles.item)}>
        <img src={linkImg} alt = "" />
    </div>
  )
}

export default Item