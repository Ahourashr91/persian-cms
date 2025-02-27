import React, { useEffect, useState } from 'react'
import ErrorBox from './../../components/errorBox/ErrorBox'
import DeleteModal from './../../components/modal/Modal'
import EditModal from '../../components/editModal/EditModal'
import UserDetails from '../../components/userDetails/UserDetails'

export default function Users() {
    const [users, setUsers] = useState([])

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowEdit, setIsShowEdit] = useState(false)
    const [isShowDetails, setIsShowDetails] = useState(false)

    const [userID, setUserID] = useState(null)
    const [userName, setUserName] = useState("")
    const [userUserName, setUserUserName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userPhone, setUserPhone] = useState(null)
    const [userEmail, setUserEmail] = useState("")
    const [userAddress, setUserAddress] = useState("")
    const [userScore, setUserScore] = useState(null)
    const [userBuy, setUserBuy] = useState(null)
    const [userCity, setUserCity] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const url = "http://localhost:3000/users"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    // functions start

    const acceptDelete = () => {
        fetch(`${url}/${userID}`, {
            method: "DELETE"
        }).then(res => res.json())
        setIsShowDeleteModal(false)
    }

    const rejectDelete = () => {
        setIsShowDeleteModal(false)
    }

    const editUser = () => {
        console.log("user edited");
        setIsShowEdit(false)

        fetch(`${url}/${userID}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                firsname: userName,
                lastname: userLastName,
                username: userUserName,
                password: userPassword,
                phone: userPhone,
                city: userCity,
                email: userEmail,
                address: userAddress,
                score: userScore,
                buy: userBuy
            })
        }).then(res => console.log(res))
    }

    // functions end

    return (
        <div>
            {
                users.length === 0 ? (
                    <ErrorBox message="هیچ کاربری وجود ندارد!" />
                ) : (
                    <>
                        {/* modals start */}
                        <DeleteModal acceptFunc={acceptDelete} rejectFunc={rejectDelete} isShow={isShowDeleteModal} />
                        <UserDetails closeModal={() => setIsShowDetails(false)} isShow={isShowDetails} city={userCity} address={userAddress} score={userScore} buy={userBuy} />
                        <EditModal submitHandler={editUser} onClose={editUser} isShow={isShowEdit} >
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 89 }}>اسم :</label>
                                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='editInput' placeholder='اسم کاربر را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 89 }}>فامیلی :</label>
                                <input type="text" value={userLastName} onChange={(e) => setUserLastName(e.target.value)} className='editInput' placeholder='فامیلی کاربر را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 89 }}>یوزرنیم :</label>
                                <input type="text" value={userUserName} onChange={(e) => setUserUserName(e.target.value)} className='editInput' placeholder='یوزرنیم کاربر را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 89 }}>شماره تماس :</label>
                                <input type="number" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className='editInput' placeholder='شماره تماس کاربر را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 89 }}>شهر :</label>
                                <input type="text" value={userCity} onChange={(e) => setUserCity(e.target.value)} className='editInput' placeholder='شهر کاربر را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 89 }}>ایمیل :</label>
                                <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className='editInput' placeholder='ایمیل کاربر را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 89 }}>آدرس :</label>
                                <input type="text" value={userAddress} onChange={(e) => setUserAddress(e.target.value)} className='editInput' placeholder='آدرس کاربر را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 89 }}>پسوورد :</label>
                                <input type="text" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} className='editInput' placeholder='آدرس کاربر را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 89 }}>امتیاز :</label>
                                <input type="number" value={userScore} onChange={(e) => setUserScore(e.target.value)} className='editInput' placeholder='امتیاز کاربر را بنویسید' />
                            </div>
                            <div className='input-parent'>
                                <label style={{ marginTop: 14, marginLeft: 9, width: 89 }}>خرید :</label>
                                <input type="number" value={userBuy} onChange={(e) => setUserBuy(e.target.value)} className='editInput' placeholder='خرید کاربر را بنویسید' />
                            </div>

                        </EditModal>
                        {/* modals end */}
                        <table className='productsTable'>
                            <thead>
                                <tr>
                                    <th>نام و نام خانوادگی</th>
                                    <th>یوزرنیم</th>
                                    <th>رمز عبور</th>
                                    <th>شماره تماس</th>
                                    <th>ایمیل</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => (
                                        <tr key={user.id}>
                                            <td>{`${user.firsname} ${user.lastname}`}</td>
                                            <td>{user.username}@</td>
                                            <td>{user.password}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.email}</td>
                                            <td style={{ width: 300 }}>
                                                <button className='tableBtn' onClick={() => {
                                                    setIsShowDeleteModal(true)
                                                    setUserID(user.id)
                                                }}>حذف</button>
                                                <button className='tableBtn' onClick={() => {
                                                    setIsShowEdit(true)
                                                    setUserID(user.id)
                                                    setUserName(user.firsname)
                                                    setUserUserName(user.username)
                                                    setUserLastName(user.lastname)
                                                    setUserPhone(user.phone)
                                                    setUserCity(user.city)
                                                    setUserAddress(user.address)
                                                    setUserScore(user.score)
                                                    setUserBuy(user.buy)
                                                    setUserEmail(user.email)
                                                    setUserPassword(user.password)
                                                }}>ویرایش</button>
                                                <button className='tableBtn' onClick={() => {
                                                    setIsShowDetails(true)
                                                    setUserID(user.id)
                                                    setUserCity(user.city)
                                                    setUserAddress(user.address)
                                                    setUserScore(user.score)
                                                    setUserBuy(user.buy)
                                                }}>جزییات</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </>

                )
            }
        </div >
    )
}
