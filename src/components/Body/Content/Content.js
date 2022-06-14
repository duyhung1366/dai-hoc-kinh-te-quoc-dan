import React from 'react'
import Courses from './Courses/Courses'
import Feedback from './Feedback/Feedback'

const Content = () => {
  return (
    <div className='grid'>
        <Courses />
        <Feedback />
    </div>
  )
}

export default Content