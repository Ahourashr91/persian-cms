import React from 'react'
import { createPortal } from 'react-dom'

export default function UserDetails({ isShow, city, address, score, buy, closeModal }) {
    return (
        <>
            {createPortal(
                <div className={`modal-parent ${isShow ? "active" : ""}`}>
                    <div className='modal'>
                        <table>
                            <tr>
                                <th>شهر</th>
                                <th>آدرس</th>
                                <th>امتیاز</th>
                                <th>میزان خرید</th>
                            </tr>
                            <tr>
                                <td>{city}</td>
                                <td>{address}</td>
                                <td>{score}</td>
                                <td>{buy}</td>
                            </tr>
                        </table>
                        <div className='btn-parent'>
                            <button className='dtCloseBtn' style={{ background: "red" }} onClick={closeModal}>بستن</button>
                        </div>
                    </div>
                </div>, document.getElementById("modal-parent")
            )}
        </>
    )
}
