import React from 'react'
import { createPortal } from 'react-dom'

export default function CommentModal({ isShow, message, onClose }) {
    return (
        <>
            {createPortal(
                <div className={`modal-parent ${isShow ? "active" : ""}`}>
                    <div className='modal' style={{width: 500}}>
                        <p className='modalTitle'>{message}</p>
                        <div className='btn-parent'>
                            <button className='dtCloseBtn' onClick={onClose} style={{ background: "red" }}>بستن</button>
                        </div>
                    </div>
                </div>, document.getElementById("modal-parent")
            )}
        </>
    )
}
