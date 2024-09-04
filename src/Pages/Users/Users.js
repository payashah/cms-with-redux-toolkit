import React, { useEffect } from 'react'
import "./Users.css"
import { GoSearch } from "react-icons/go";
import UserBox from '../../Components/UserBox/UserBox';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFromServer } from '../../Redux/Store/StoreUsers';


export default function Users() {

    const Users = useSelector((state) => state.Users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersFromServer("https://redux-cms.iran.liara.run/api/users"))
    }, [])

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

                    {Users.map((User) => (
                        <UserBox {...User} ></UserBox>

                    ))}



                </div>
            </div>
        </div>
    )
}
