import React, { useEffect } from 'react'
import "./Courses.css"
import CourseBox from '../../Components/CourseBox/CourseBox'
import { useDispatch, useSelector } from 'react-redux'
import { getCoursesFromServer } from '../../Redux/Store/StoreCourses'

export default function Courses() {

    const Courses = useSelector((state) => state.Courses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCoursesFromServer())
    }, [])

    return (
        <div className='courses-ctrl'>
            <div className='courses'>
                <h1 className='courses-title'>اطلاعات دوره ها :</h1>
                <div className='courses-courseBox'>

                    {
                        Courses.map((course) => (
                            <CourseBox key={course._id} {...course}></CourseBox>

                        ))
                    }

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
