import React from 'react'
import { createPortal } from 'react-dom'

export default function DetailsModal({ isShow, count, price, popularity, closeModal }) {
  return (
    <>
      {createPortal(
        <div className={`modal-parent ${isShow ? "active" : ""}`}>
          <div className='modal'>
            <table> 
              <tr>
                <th>قیمت کل</th>
                <th>محبوبیت محصول</th>
                <th>تعداد</th>
              </tr>
              <tr>
                <td>{price} تومان</td>
                <td>{popularity}%</td>
                <td>{count}</td>
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
