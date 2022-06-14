import styles from'./Body.module.css';
import HeaderBody from './HeaderBody/HeaderBody';
import Combo from './Combo/Combo';
import HeaderCourse from './HeaderCourse/HeaderCourse';
import Content from './Content/Content';
import React from 'react'
import clsx from 'clsx';
import Intro from './Intro/Intro';
import Community from './Community/Community';
import News from './News/News';

const Body = () => {
  return (
    <div style={{backgroundColor : "#F2F6FC"}}>
      <div  className='grid wide'>
        <div className={clsx(styles.body)}>
            <HeaderBody />
            <Combo />
            <HeaderCourse />
            <Content />
            <Intro />
            <Community />
            <News />
        </div>
      </div>
    </div>
  )
}

export default Body