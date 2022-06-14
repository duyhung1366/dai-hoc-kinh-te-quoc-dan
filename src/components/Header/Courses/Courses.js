import React from 'react'
import './Courses.css' ; 

const Courses = ({school,url}) => {
  return (
    <>
      <div>
          <a className='d-flex' href={url} title={school} target = '_blank' rel="noreferrer">
              <span>{school}</span>
          </a>
      </div>
    </>
  )
}

export default Courses;