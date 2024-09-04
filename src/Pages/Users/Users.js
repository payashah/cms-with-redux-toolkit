import React from 'react'
import "./Users.css"
import { GoSearch } from "react-icons/go";
import UserBox from '../../Components/UserBox/UserBox';


export default function Users() {
    return (
        <div className='users-ctrl'>
            <div className='users'>
                <div className='users-header'>
                    <div className='users-hesder-inputBox'>
                        <input className='users-header-input' maxLength={60} type="text" placeholder='نام یا ایمیل کاربر را وارد کنید ...' />
                        <GoSearch className='users-header-search'></GoSearch>
                    </div>
                    <button className='users-header-btn'>حذف کاربر</button>
                </div>

                <div className='usersBox-ctrl'>
                    <UserBox></UserBox>
                    <UserBox></UserBox>
                    <UserBox></UserBox>

                </div>
            </div>
        </div>
    )
}
