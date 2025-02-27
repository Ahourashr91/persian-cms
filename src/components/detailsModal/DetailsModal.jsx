import React from 'react'
import { createPortal } from 'react-dom'

export default function DetailsModal({ isShow, title, price, popularity, closeModal }) {
  return (
    <>
      {createPortal(
        <div className={`modal-parent ${isShow ? "active" : ""}`}>
          <div className='modal'>
            <table> 
              <tr>
                <th>اسم</th>
                <th>قیمت</th>
                <th>محبوبیت</th>
              </tr>
              <tr>
                <td>{title}</td>
                <td>{price} تومان</td>
                <td>{popularity}%</td>
              </tr>
            </table>
            <div className='btn-parent'>
              <button className='dtCloseBtn' style={{background: "red"}} onClick={closeModal}>بستن</button>
            </div>
          </div>
        </div>, document.getElementById("modal-parent")
      )}
    </>
  )
}
