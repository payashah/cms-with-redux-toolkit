import React from 'react'
import "./UserBox.css"
import { useDispatch } from 'react-redux'

export default function UserBox({ firstname, lastname, email }) {


    return (
        <div className='userBox-ctrl'>
            <div className='userBox'>
                <div className='userBox-infoBox'>
                    <img className='userBox-infoBox-img' src="./img/paya.png" alt="pic" />
                    <div className='userBox-infoBox-nameJob'>
                        <h1 className='userBox-infoBox-nameEmail-name'>{firstname}{lastname}</h1>
                        <h3 className='userBox-infoBox-nameJob-email'>{email}</h3>
                    </div>
                </div>
                <div className='userBox-btnBox'>
                    <button className='userBox-btnBox-btn'>پیام ها</button>
                    <button className='userBox-btnBox-btn'>اطلاعات</button>
                    <button className='userBox-btnBox-btn'>حذف</button>
                </div>
            </div>
        </div>
    )
}
