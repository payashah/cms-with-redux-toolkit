import React from 'react'
import "./EditModal.css"
import { IoCloseOutline } from "react-icons/io5";

import ReactDOM from "react-dom"

export default function EditModal({ close }) {



    return ReactDOM.createPortal(
        <div className='modals-parent active'>
            <div className='editmodal-ctrl'>
                <IoCloseOutline className='closeIcon' onClick={close}></IoCloseOutline>
                <div className='editmodal'>
                    <h1 className='editmodal-title'>اطلاعات :</h1>
                    <div className='editmodal-inputBox'>
                        <input className='editmodal-inpuyBox-input' type="text" placeholder='نام ...' />
                        <input className='editmodal-inpuyBox-input' type="text" placeholder='نام خانوادگی ...' />
                        <input className='editmodal-inpuyBox-input' type="text" placeholder='کد ملی ...' />
                        <input className='editmodal-inpuyBox-input' type="text" placeholder='ایمیل ...' />
                        <input className='editmodal-inpuyBox-input' type="text" placeholder='نام کاربری ...' />
                        <input className='editmodal-inpuyBox-input' type="text" placeholder='رمز عبور فعلی ...' />
                        <input className='editmodal-inpuyBox-input' type="text" placeholder='رمز عبور جدید ...' />
                        <input className='editmodal-inpuyBox-input' type="text" placeholder='تکرار رمز عبور جدید ...' />
                    </div>
                    <div className='editmodal-btnBox'>
                        <button className='editmodal-btnBox-btn' >ثبت تغییرات</button>

                    </div>
                </div>
            </div>


        </div>, document.getElementById("modals-parent")
    )
}
