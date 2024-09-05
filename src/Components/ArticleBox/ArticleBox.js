import React from 'react'
import "./ArticleBox.css"
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { removeArticle } from '../../Redux/Store/StoreArticles'

export default function ({ _id, title, category, views, desc }) {

    const dispatch = useDispatch()

    const removeHandler = () => {
        swal({
            title: "آیا از حذف این مقاله اطمینان دارید ؟",
            icon: "warning",
            buttons: ["خیر", "بله"]
        }).then((result) => {
            if (result) {
                dispatch(removeArticle(_id))

                swal({
                    title: "مقاله مورد نظر با موفقیت حذف شد",
                    icon: "success",
                    buttons: "انجام شد"
                })
            }
        })
    }

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
                            <button className='articleBox-btnBox-left-btn delete' onClick={removeHandler}>حذف</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
