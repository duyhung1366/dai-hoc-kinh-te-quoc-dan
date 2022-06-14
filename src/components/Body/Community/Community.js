import React from 'react'
import Title from '../../common/Title/Title'
import Item from './Item/Item'
import styles from './Community.module.scss'

const Community = () => {
  return (
    <div className={styles.community}>
        <Title title="cộng đồng" />
        <div className='row'>
            <Item 
                title = "GROUP GÓC ÔN THI NEU SHARES"
                numberMember = "30000"
                linkJoin ="https://www.facebook.com/onthisinhvienHL.NEU"
            />
            <Item 
                title = "FANPAGE ÔN THI SINH VIÊN HL ĐH KINH TẾ QUỐC DÂN"
                numberMember = "12000"
                linkJoin ="https://www.facebook.com/onthisinhvienHL.NEU"
            />
            <Item 
                title = "GROUP GÓC REVIEW NHÀ TRỌ BÁCH KINH XÂY"
                numberMember = "80000"
                linkJoin ="https://www.facebook.com/groups/1519291791478012"
            />
            <Item 
                title = "GÓC ÔN THI AEP - NEU SHARES"
                numberMember = "3100"
                linkJoin ="https://www.facebook.com/groups/neuaep"
            />
        </div>
    </div>
  )
}

export default Community