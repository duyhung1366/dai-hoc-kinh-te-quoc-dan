import clsx from 'clsx';
import React from 'react'
import ItemCourse from '../ItemCourse/ItemCourse';

const Show = (props) => {

    const {courses} = props ;

  return (
    <div className={clsx('row')}>
        {
            courses.map(course => (
                <ItemCourse 
                    key={course.key}
                    linka= {course.id}
                    linkImg={course.avatar}
                    decription = {course.decription}
                    price = {course.realCost}
                    title = {course.title}
                />
            ))
        }
    </div>
  )
}

export default Show