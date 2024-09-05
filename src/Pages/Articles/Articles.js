import React, { useEffect } from 'react'
import "./Articles.css"
import ArticleBox from '../../Components/ArticleBox/ArticleBox'
import { useDispatch, useSelector } from 'react-redux'
import { getArticlesFromServer } from '../../Redux/Store/StoreArticles'

export default function Articles() {

    const Articles = useSelector((state) => state.Articles)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticlesFromServer("https://redux-cms.iran.liara.run/api/articles/"))
    }, [])

    return (
        <div className='articles-ctrl'>
            <div className='articles'>
                <h1 className='articles-title'>اطلاعات مقاله ها :</h1>
                <div className='articles-articleBox'>
                    {
                        Articles.map((article) => (
                            <ArticleBox key={article._id} {...article}></ArticleBox>

                        ))
                    }


                </div>

            </div>
            <div className='articles-btnBox'>
                <button className='articles-btnBox-btn createArticle'>افزودن مقاله جدید</button>

            </div>
        </div>
    )
}
