import React from 'react'
import "./UserBox.css"

export default function UserBox() {
    return (

        <div className='userBox'>
            <div className='userBox-infoBox'>
                <img className='userBox-infoBox-img' src="./img/paya.png" alt="pic" />
                <div className='userBox-infoBox-nameJob'>
                    <h1 className='userBox-infoBox-nameEmail-name'>پایا</h1>
                    <h3 className='userBox-infoBox-nameJob-email'>paya.6225@gmail.com</h3>
                </div>
            </div>
            <div className='userBox-btnBox'>
                <button className='userBox-btnBox-btn massages'>پیام ها</button>
                <button className='userBox-btnBox-btn infos'>اطلاعات</button>
                <button className='userBox-btnBox-btn delete'>حذف</button>
            </div>
        </div>

    )
}
