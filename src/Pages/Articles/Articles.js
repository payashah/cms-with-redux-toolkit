import React from 'react'
import "./Articles.css"
import ArticleBox from '../../Components/ArticleBox/ArticleBox'

export default function Articles() {
    return (
        <div className='articles-ctrl'>
            <div className='articles'>
                <h1 className='articles-title'>اطلاعات مقاله ها :</h1>
                <div className='articles-articleBox'>
                    <ArticleBox></ArticleBox>
                    <ArticleBox></ArticleBox>
                    <ArticleBox></ArticleBox>

                </div>

            </div>
            <div className='articles-btnBox'>
                <button className='articles-btnBox-btn createArticle'>افزودن مقاله جدید</button>

            </div>
        </div>
    )
}
