import React from 'react'
import "./CourseBox.css"
import { useDispatch } from 'react-redux'
import { removeCourse } from '../../Redux/Store/StoreCourses'
import swal from 'sweetalert'

export default function CourseBox({ _id, title, price, category, registersCount, discount, desc }) {

    const dispatch = useDispatch()

    const removeHandler = () => {
        swal({
            title: "آیا از حذف این دوره اطمینان دارید ؟",
            icon: "warning",
            buttons: ["خیر", "بله"]
        }).then((result) => {
            if (result) {
                dispatch(removeCourse(_id))
                swal({
                    title: "دوره مدنظر با موفقیت حذف شد",
                    icon: "success",
                    buttons: "انجام شد"
                })
            }
        })
    }

    return (
        <div className='courseBox'>
            <div className='courseBox-infos'>
                <img className='courseBox-infos-img' src="./img/redux.png" alt="pic" />
                <div className='courseBox-infos-box'>
                    <div>
                        <h1 className='courseBox-infos-box-title'>  {title} :</h1>
                        <p className='courseBox-infos-box-desc'>
                            {desc}
                        </p>
                    </div>
                    <div className='courseBox-btnBox'>
                        <div className='courseBox-btnBox-right'>
                            <div className='courseBox-btnBox-right-box'>
                                <p className='courseBox-btnBox-right-box-title price'>قیمت : </p>
                                <p className='courseBox-btnBox-right-box-desc price'>{price} تومان</p>
                            </div>

                            <div className='courseBox-btnBox-right-box'>
                                <p className='courseBox-btnBox-right-box-title category'>دسته بندی : </p>
                                <p className='courseBox-btnBox-right-box-desc category'> {category} </p>
                            </div>

                            <div className='courseBox-btnBox-right-box'>
                                <p className='courseBox-btnBox-right-box-title sale'>تعداد فروش : </p>
                                <p className='courseBox-btnBox-right-box-desc sale'>{discount}</p>
                            </div>
                            /
                        </div>

                        <div className='courseBox-btnBox-left'>
                            <button className='courseBox-btnBox-left-btn edit'>ویرایش</button>
                            <button className='courseBox-btnBox-left-btn delete' onClick={removeHandler}>حذف</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
