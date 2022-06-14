import React from 'react'
import Title from '../../common/Title/Title'
import styles from './Intro.module.scss'
import Item from './Item/Item'

const Intro = () => {
  return (
    <div className={styles.intro}>
        <Title title = {"ôn thi sinh viên"} line2 = "Thay đổi cách học và thi của bạn" />
        <div className={styles.listItem}>
            <div className={styles.container}>
                <Item 
                    linkIcon = "https://onthisinhvien.com/resources/images/otsv/khoa-luyen.svg"
                    count = "150"
                    charactor = "+"
                    textInfo = "Khóa Luyện"
                />
                <Item 
                    linkIcon = "https://onthisinhvien.com/resources/images/otsv/hocvien.svg"
                    count = "80"
                    charactor = "%"
                    textInfo = "Khá Giỏi"
                />
                <Item 
                    linkIcon = "https://onthisinhvien.com/resources/images/otsv/kha-gioi.svg"
                    count = "500"
                    charactor = "+"
                    textInfo = "9-10 điểm"
                />
                <Item 
                    linkIcon = "https://onthisinhvien.com/resources/images/otsv/feebb.svg"
                    count = "100"
                    charactor = "+"
                    textInfo = "feedback"
                />
                <Item 
                    linkIcon = "https://onthisinhvien.com/resources/images/otsv/kha-gioi.svg"
                    count = "30K"
                    charactor = "+"
                    textInfo = "thành viên"
                />
            </div>
        </div>
    </div>
  )
}

export default Intro