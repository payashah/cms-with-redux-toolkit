import React from 'react'
import "./ArticleBox.css"

export default function () {
    return (
        <div className='articleBox'>
            <div className='articleBox-infos'>
                <img className='articleBox-infos-img' src="./img/redux.png" alt="pic" />
                <div className='articleBox-infos-box'>
                    <h1 className='articleBox-infos-box-title'>دوره متخصص Redux :</h1>
                    <p className='articleBox-infos-box-desc'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste labore quaerat saepe dolorum
                        error omnis? Vitae expedita voluptatem, quae inventore debitis assumenda nostrum repudiandae
                        saepe repellendus? Ex cumque quo ipsa facilis, perspiciatis, alias itaque vel doloribus,
                        necessitatibus commodi nobis! Dolore.
                    </p>
                    <div className='articleBox-btnBox'>
                        <div className='articleBox-btnBox-right'>

                            <div className='articleBox-btnBox-right-box'>
                                <p className='articleBox-btnBox-right-box-title category'>دسته بندی : </p>
                                <p className='articleBox-btnBox-right-box-desc category'> فرانت اند</p>
                            </div>

                            <div className='articleBox-btnBox-right-box'>
                                <p className='articleBox-btnBox-right-box-title sale'>تعداد بازدید : </p>
                                <p className='articleBox-btnBox-right-box-desc sale'>98</p>
                            </div>

                        </div>
                        <div className='articleBox-btnBox-left'>
                            <button className='articleBox-btnBox-left-btn edit'>ویرایش</button>
                            <button className='articleBox-btnBox-left-btn delete'>حذف</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
