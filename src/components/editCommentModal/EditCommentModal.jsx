import React from 'react'
import { createPortal } from 'react-dom'

export default function CommentModal({ isShow, children, submit }) {
    return (
        <>
            {createPortal(
                <div className={`modal-parent ${isShow ? "active" : ""}`}>
                    <div className='modal' style={{ width: 500 }}>
                        {children}
                        <div className='btn-parent'>
                            <button className='tableBtn' style={{ padding: "8px 28px", fontSize: 16 }} onClick={submit}>ثبت اطلاعات</button>
                        </div>
                    </div>
                </div>, document.getElementById("modal-parent")
            )}
        </>
    )
}
