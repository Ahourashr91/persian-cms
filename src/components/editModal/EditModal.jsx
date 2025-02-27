import React from 'react'
import { createPortal } from 'react-dom'

export default function EditModal({ isShow, children, onClose, submitHandler }) {
    return (
        <>
            {createPortal(
                <div className={`modal-parent ${isShow ? "active" : ""}`}>
                    <div className='modal'>
                        <form>
                            {children}
                            <div className='input-parent'>
                                <input type="button" onClick={() => {
                                    onClose()
                                    submitHandler()
                                }} className='submitInformations' value="ثبت اطلاعات" />
                            </div>
                        </form>
                    </div>
                </div>, document.getElementById("modal-parent")
            )}
        </>
    )
}
