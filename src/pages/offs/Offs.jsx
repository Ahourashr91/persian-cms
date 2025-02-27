import React, { useEffect, useState } from 'react'
import ErrorBox from '../../components/errorBox/ErrorBox'
import DeleteModal from './../../components/modal/Modal'
import EditModal from './../../components/editModal/EditModal'
import AcceptModal from "./../../components/acceptModal/AcceptModal"

export default function Offs() {
    const [offs, setOffs] = useState([])

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [isShowAcceptModal, setIsShowAcceptModal] = useState(false)
    const [isShowRejectModal, setIsShowRejectModal] = useState(false)

    const [offID, setOffId] = useState(null)

    const [offCode, setOffCode] = useState("")
    const [offPercent, setOffPercent] = useState(null)
    const [offAdmin, setOffAdmin] = useState("")
    const [offProduct, setOffProduct] = useState("")
    const [offDate, setOffDate] = useState("")
    const [offIsActive, setOffIsActive] = useState(null)

    const url = "http://localhost:3000/offs"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOffs(data))
    }, [offs])

    // functions start

    const acceptDelete = () => {
        fetch(`${url}/${offID}`, {
            method: "DELETE"
        }).then(res => console.log(res))
        setIsShowDeleteModal(false)
    }

    const submitEdit = () => {
        fetch(`${url}/${offID}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                code: offCode,
                percent: offPercent,
                admin: offAdmin,
                product: offProduct,
                date: offDate,
                isActive: offIsActive
            })
        })
    }

    const acceptOff = () => {
        fetch(`${url}/${offID}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                code: offCode,
                percent: offPercent,
                admin: offAdmin,
                product: offProduct,
                date: offDate,
                isActive: 1
            })
        })
        setIsShowAcceptModal(false)
    }

    const rejectOff = () => {
        fetch(`${url}/${offID}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                code: offCode,
                percent: offPercent,
                admin: offAdmin,
                product: offProduct,
                date: offDate,
                isActive: 0
            })
        })
        setIsShowRejectModal(false)
    }

    // functions end

    
    return (
        <div>
            {
                offs.length === 0 ? (
                    <ErrorBox message="هیچ کد تخفیفی ثبت نشده!" />
                ) : (
                    <>
                        {/* modals start */}
                        <DeleteModal isShow={isShowDeleteModal} acceptFunc={acceptDelete} rejectFunc={() => setIsShowDeleteModal(false)} />
                        <EditModal onClose={() => setIsShowEditModal(false)} submitHandler={submitEdit} isShow={isShowEditModal}>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>کد :</label>
                                <input type="text" value={offCode} onChange={(e) => setOffCode(e.target.value)} className='editInput' placeholder='اسم محصول را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>درصد :</label>
                                <input type="number" value={offPercent} onChange={(e) => setOffPercent(e.target.value)} className='editInput' placeholder='اسم محصول را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>ادمین :</label>
                                <input type="text" value={offAdmin} onChange={(e) => setOffAdmin(e.target.value)} className='editInput' placeholder='اسم محصول را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>محصول :</label>
                                <input type="text" value={offProduct} onChange={(e) => setOffProduct(e.target.value)} className='editInput' placeholder='اسم محصول را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>تاریخ :</label>
                                <input type="text" value={offDate} onChange={(e) => setOffDate(e.target.value)} className='editInput' placeholder='اسم محصول را بنویسید' />
                            </div>
                        </EditModal>
                        <AcceptModal message={`آیا از تایید اطمینان دارید؟`} acceptFunc={acceptOff} rejectFunc={() => setIsShowAcceptModal(false)} isShow={isShowAcceptModal} />
                        <AcceptModal message={`آیا از رد اطمینان دارید؟`} acceptFunc={rejectOff} rejectFunc={() => setIsShowRejectModal(false)} isShow={isShowRejectModal} />
                        {/* modals end */}
                        <table className='productsTable'>
                            <thead>
                                <th>کد</th>
                                <th>درصد</th>
                                <th>ادمین</th>
                                <th>محصول</th>
                                <th>تاریخ</th>
                            </thead>
                            <tbody>
                                {
                                    offs.map(off => (
                                        <tr key={off.id}>
                                            <td>{off.code}</td>
                                            <td>{off.percent}%</td>
                                            <td>{off.admin}</td>
                                            <td>{off.product}</td>
                                            <td>{off.date}</td>
                                            <td style={{ width: 250 }}>
                                                <button className='tableBtn' onClick={() => {
                                                    setOffId(off.id)
                                                    setIsShowDeleteModal(true)
                                                }}>حذف</button>
                                                <button className='tableBtn' onClick={() => {
                                                    setIsShowEditModal(true)
                                                    setOffId(off.id)
                                                    setOffCode(off.code)
                                                    setOffPercent(off.percent)
                                                    setOffAdmin(off.admin)
                                                    setOffProduct(off.product)
                                                    setOffDate(off.date)
                                                    setOffIsActive(off.isActive)
                                                }}>ویرایش</button>
                                                {
                                                    off.isActive === 0 ? (
                                                        <button className='tableBtn' onClick={() => {
                                                            setIsShowAcceptModal(true)
                                                            setOffId(off.id)
                                                            setOffCode(off.code)
                                                            setOffPercent(off.percent)
                                                            setOffAdmin(off.admin)
                                                            setOffProduct(off.product)
                                                            setOffDate(off.date)
                                                        }}>تایید</button>
                                                    ) : (
                                                        <button className='tableBtn' onClick={() => {
                                                            setIsShowRejectModal(true)
                                                            setOffId(off.id)
                                                            setOffCode(off.code)
                                                            setOffPercent(off.percent)
                                                            setOffAdmin(off.admin)
                                                            setOffProduct(off.product)
                                                            setOffDate(off.date)
                                                        }}>رد</button>
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </>
                )
            }
        </div>
    )
}
