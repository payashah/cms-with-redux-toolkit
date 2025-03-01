import React, { useState } from 'react'
import "./UserBox.css"
import { useDispatch } from 'react-redux'
import { removeUser } from '../../Redux/Store/StoreUsers'
import swal from 'sweetalert'
import EditModal from '../EditModal/EditModal'

export default function UserBox({ _id, firstname, lastname, email }) {

    const [isShowEditModal, setIsShowEditModal] = useState(false)

    const dispatch = useDispatch()

    const removeHandler = () => {
        swal({
            title: "آیا از حذف کاربر اطمینان دارید ؟",
            icon: "warning",
            buttons: ["خیر", "بله"]
        }).then(result => {
            if (result) {
                dispatch(removeUser(_id))

                swal({
                    title: "حذف کاربر با موفقیت انجام شد",
                    icon: "success",
                    buttons: "بله"
                })

            }
        })
    }
    const editHandler = () => {
        setIsShowEditModal(true)
    }

    const closeHandler = () => {
        setIsShowEditModal(false)
    }

    return (
        <>
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
                        <button className='userBox-btnBox-btn messages'>پیام ها</button>
                        <button className='userBox-btnBox-btn infos' onClick={() => editHandler()}>اطلاعات</button>
                        <button className='userBox-btnBox-btn delete' onClick={removeHandler}>حذف</button>
                    </div>
                </div>
            </div>
            {
                isShowEditModal && <EditModal onClose={closeHandler}></EditModal>
            }
        </>
    )
}
