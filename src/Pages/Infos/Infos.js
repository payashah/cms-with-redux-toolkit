import React from 'react'
import "./Infos.css"

export default function Infos() {
    return (
        <div className='infos-ctrl'>
            <div className='infos'>
                <h1 className='infos-title'>اطلاعات شما : </h1>
                <div className='infos-inputBox'>
                    <input className='infos-inputBox-input' type="text" placeholder='نام ...' />
                    <input className='infos-inputBox-input' type="text" placeholder='نام خانوادگی ...' />
                    <input className='infos-inputBox-input' type="text" placeholder='کد ملی ...' />
                    <input className='infos-inputBox-input' type="text" placeholder='ایمیل  ...' />
                    <input className='infos-inputBox-input' type="text" placeholder='نام کاربری ...' />
                    <input className='infos-inputBox-input password' type="text" placeholder='رمز عبور فعلی ...' />
                    <input className='infos-inputBox-input password' type="text" placeholder='رمز عبور جدید ...' />
                    <input className='infos-inputBox-input password' type="text" placeholder='تکرار رمز عبور جدید ...' />
                </div>
                <h1 className='infos-title'>عکس پروفایل :</h1>
                <div className='info-imgBox'>
                    <img className='infos-imgBox-img' src="./img/paya.png" alt="pic" />
                    <div>
                        <button className='infos-imgBox-uploadBtn'>آپلود عکس</button>
                    </div>
                </div>

                <div className='infos-btn-record'>
                    <button className='infos-btn'> تغییر اطلاعات</button>

                </div>
            </div>
        </div>
    )
}
