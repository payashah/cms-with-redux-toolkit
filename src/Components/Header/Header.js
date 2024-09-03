import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <div className='header-ctrl'>
            <div className='header'>
                <div className='header-right'>
                    <img className='header-right-img' src="./img/paya.png" alt="pic" />
                    <div className='header-right-infoBox'>
                        <h1 className='header-right-infoBox-title'>پایا شاه ملکی</h1>
                        <h3 className='header-right-infoBox-job'>فرانت اند</h3>
                    </div>
                </div>

                <div className='header-left'>
                    <button className='header-left-btn'>خروج</button>
                </div>

            </div>
        </div>
    )
}
