import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome, FaComment, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { BsBagCheck } from 'react-icons/bs'
import { MdLocalOffer } from "react-icons/md";

export default function Sidebar() {
    return (
        <>
            <div className='sidebar'>
                <p className='sideTitem'>به داشبورد خود خوش آمدید!</p>
                <NavLink to='/' style={{ marginTop: 40 }} className={`sideitem ${link => link.isActive ? "active": ""}`}><FaHome /> خانه</NavLink>
                <NavLink to='products' className='sideitem'><FaShoppingCart /> محصولات</NavLink>
                <NavLink to='comments' className='sideitem'><FaComment /> کامنت ها</NavLink>
                <NavLink to='users' className='sideitem'><FaUsers /> کاربران</NavLink>
                <NavLink to='orders' className='sideitem'><BsBagCheck /> سفارشات</NavLink>
                <NavLink to='offs' className='sideitem'><MdLocalOffer /> تخفیف ها</NavLink>
            </div>
        </>
    )
}
