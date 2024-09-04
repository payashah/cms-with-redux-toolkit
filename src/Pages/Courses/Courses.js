import React from 'react'
import "./Courses.css"
import CourseBox from '../../Components/CourseBox/CourseBox'

export default function Courses() {
    return (
        <div className='courses-ctrl'>
            <div className='courses'>
                <h1 className='courses-title'>اطلاعات دوره ها :</h1>
                <div className='courses-courseBox'>
                    <CourseBox></CourseBox>
                    <CourseBox></CourseBox>

                </div>

            </div>
            <div className='courses-btnBox'>
                <button className='courses-btnBox-btn createCourse'>افزودن دوره جدید</button>
                <button className='courses-btnBox-btn createCategory'>افزودن دسته بندی جدید</button>
                <button className='courses-btnBox-btn createOff'>اعمال تخفیف روی همه دوره ها</button>
            </div>
        </div>
    )
}
