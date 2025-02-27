import React from 'react'
import { createPortal } from 'react-dom'

export default function AcceptModal({ isShow, acceptFunc, rejectFunc, message }) {
    return (
        <>
            {createPortal(
                <div className={`modal-parent ${isShow ? "active" : ""}`}>
                    <div className='modal'>
                        <p className='modalTitle'>{message}؟</p>
                        <div className='btns-parent'>
                            <button className='modal-btn modal-accept' onClick={acceptFunc}>بله</button>
                            <button className='modal-btn modal-reject' onClick={rejectFunc}>خیر</button>
                        </div>
                    </div>
                </div>, document.getElementById("modal-parent")
            )}
        </>
    )
}