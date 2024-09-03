import React from 'react'
import "./Sidebar.css"
import { FaUsers } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { TbCategoryFilled } from "react-icons/tb";
import { TbArticle } from "react-icons/tb";
import { Link } from 'react-router-dom';



export default function Sidebar() {
    return (
        <div className='sidebar-ctrl'>
            <div className='sidebar'>
                <h1 className='sidebar-title'>پایای عزیز به پنل خودت خوش اومدی</h1>
                <ul className='sidebar-ul'>

                    <Link to="/Users" className='sidebar-ul-li'>
                        <FaUsers className='sidebar-ul-li-icon'></FaUsers>
                        <p className='sidebar-ul-li-title'>کاربران</p>
                    </Link>

                    <Link to="/Infos" className='sidebar-ul-li'>
                        <FaCircleInfo className='sidebar-ul-li-icon'></FaCircleInfo>
                        <p className='sidebar-ul-li-title'>اطلاعات</p>
                    </Link>

                    <Link to="/Courses" className='sidebar-ul-li'>
                        <TbCategoryFilled className='sidebar-ul-li-icon'></TbCategoryFilled>
                        <p className='sidebar-ul-li-title'>دوره ها</p>
                    </Link>

                    <Link to="Articles" className='sidebar-ul-li'>
                        <TbArticle className='sidebar-ul-li-icon'></TbArticle>
                        <p className='sidebar-ul-li-title'>وبلاگ</p>
                    </Link>

                </ul>
            </div>
        </div>
    )
}
