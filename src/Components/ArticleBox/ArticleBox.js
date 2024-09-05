import React from 'react'
import "./ArticleBox.css"

export default function ({ _id, title, category, views, desc }) {
    return (
        <div className='articleBox'>
            <div className='articleBox-infos'>
                <img className='articleBox-infos-img' src="./img/article.png" alt="pic" />
                <div className='articleBox-infos-box'>
                    <div>
                        <h1 className='articleBox-infos-box-title'>  {title} :</h1>
                        <p className='articleBox-infos-box-desc'>
                            {desc}
                        </p>
                    </div>
                    <div className='articleBox-btnBox'>
                        <div className='articleBox-btnBox-right'>

                            <div className='articleBox-btnBox-right-box'>
                                <p className='articleBox-btnBox-right-box-title category'>دسته بندی : </p>
                                <p className='articleBox-btnBox-right-box-desc category'> {category} </p>
                            </div>

                            <div className='articleBox-btnBox-right-box'>
                                <p className='articleBox-btnBox-right-box-title sale'>تعداد بازدید : </p>
                                <p className='articleBox-btnBox-right-box-desc sale'>{views}</p>
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
