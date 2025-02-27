import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ isShow, acceptFunc, rejectFunc }) {
    return (
        <>
            {createPortal(
                <div className={`modal-parent ${isShow ? "active" : ""}`}>
                    <div className='modal'>
                        <p className='modalTitle'>آیا از حذف اطمینان دارید؟</p>
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
