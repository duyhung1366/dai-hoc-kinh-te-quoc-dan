import clsx from 'clsx'
import React from 'react'
import Title from '../../common/Title/Title'
import Contents from './Contents/Contents'
import styles from './News.module.scss'
import Button from './Button/Button'
const News = () => {
  return (
    <div className={styles.news}>
        <Title title='TIN TỨC CỦA TRƯỜNG' />
        <div className={styles.decriptions}>
        Những sự kiện, hoạt động nổi bật của sinh viên
        </div>
        <div className={clsx(styles.contents,'row')}>
            <Contents
                title ="Cuộc thi viết “The Mirror”- Ôn thi sinh viên đồng hành cùng ban phát thanh &#38; tuyên truyền -NEU"
                linkImg ="https://storage.googleapis.com/onthisinhvien.appspot.com/images/972361018-1653127106048-onthusinhvienhl.png"
                date ="21/05/2022"
            />
            <Contents
                title ="Cuộc thi viết “The Mirror”- Ôn thi sinh viên đồng hành cùng ban phát thanh &#38; tuyên truyền -NEU"
                linkImg ="https://storage.googleapis.com/onthisinhvien.appspot.com/images/972361018-1653127106048-onthusinhvienhl.png"
                date ="21/05/2022"
            />
            <Contents
                title ="Cuộc thi viết “The Mirror”- Ôn thi sinh viên đồng hành cùng ban phát thanh &#38; tuyên truyền -NEU"
                linkImg ="https://storage.googleapis.com/onthisinhvien.appspot.com/images/972361018-1653127106048-onthusinhvienhl.png"
                date ="21/05/2022"
            />
            
        </div>
        <Button />
    </div>
  )
}

export default News