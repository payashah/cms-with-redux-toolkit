import React from 'react'
import "./CourseBox.css"

export default function CourseBox() {
    return (
        <div className='courseBox'>
            <div className='courseBox-infos'>
                <img className='courseBox-infos-img' src="./img/redux.png" alt="pic" />
                <div className='courseBox-infos-box'>
                    <h1 className='courseBox-infos-box-title'>دوره متخصص Redux :</h1>
                    <p className='courseBox-infos-box-desc'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste labore quaerat saepe dolorum
                        error omnis? Vitae expedita voluptatem, quae inventore debitis assumenda nostrum repudiandae
                        saepe repellendus? Ex cumque quo ipsa facilis, perspiciatis, alias itaque vel doloribus,
                        necessitatibus commodi nobis! Dolore.
                    </p>
                    <div className='courseBox-btnBox'>
                        <div className='courseBox-btnBox-right'>
                            <div className='courseBox-btnBox-right-box'>
                                <p className='courseBox-btnBox-right-box-title price'>قیمت : </p>
                                <p className='courseBox-btnBox-right-box-desc price'>1000 تومان</p>
                            </div>

                            <div className='courseBox-btnBox-right-box'>
                                <p className='courseBox-btnBox-right-box-title category'>دسته بندی : </p>
                                <p className='courseBox-btnBox-right-box-desc category'> فرانت اند</p>
                            </div>

                            <div className='courseBox-btnBox-right-box'>
                                <p className='courseBox-btnBox-right-box-title sale'>تعداد فروش : </p>
                                <p className='courseBox-btnBox-right-box-desc sale'>15</p>
                            </div>

                        </div>
                        <div className='courseBox-btnBox-left'>
                            <button className='courseBox-btnBox-left-btn edit'>ویرایش</button>
                            <button className='courseBox-btnBox-left-btn delete'>حذف</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
