import React, { useEffect, useState } from 'react'
import Modal from '../modal/Modal'
import DetailsModal from '../detailsModal/DetailsModal'
import EditModal from '../editModal/EditModal'

export default function ProductsTable({ url }) {
    const [isShowModal, setIsShowModal] = useState(false)
    const [isShowDetails, setIsShowDetails] = useState(false)
    const [isShowEdit, setIsShowEdit] = useState(false)

    const [nameValue, setNameValue] = useState("")
    const [priceValue, setPriceValue] = useState(null)
    const [countValue, setCountValue] = useState("")
    const [popularityValue, setPopularityValue] = useState("")
    const [imgValue, setImgValue] = useState("")
    const [saleValue, setSaleValue] = useState("")
    const [colorsValue, setColorsValue] = useState(null)

    const [productID, setProductID] = useState(null)
    const [popularity, setPopularity] = useState(null)
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(null)
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(datas => setAllProducts(datas))
    }, [allProducts])

    // functions start

    const showModalHandler = () => {
        setIsShowModal(prev => !prev)
    }

    const showDetailsModalHandler = () => {
        setIsShowDetails(prev => !prev)
    }

    const acceptFunc = () => {
        fetch(`${url}/${productID}`, {
            method: "DELETE"
        })
        showModalHandler()
    }

    const rejectFunc = () => {
        showModalHandler()
    }

    const showEditHandler = () => {
        setIsShowEdit(prev => !prev)
    }

    
    const editProduct = () => {
        fetch(`${url}/${productID}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title: nameValue,
                price: priceValue,
                count: countValue,
                img: imgValue,
                popularity: popularityValue,
                sale: saleValue,
                colors: colorsValue,
            })
        })
    }
    const submitHandler = () => {
        console.log("اطلاعات ثبت شد!");
        editProduct()
    }

    // functions end

    return (
        <>
            <table className='productsTable'>
                <thead>
                    <tr>
                        <th style={{ marginBottom: 200 }}>عکس</th>
                        <th>اسم</th>
                        <th>قیمت</th>
                        <th>موجودی</th>
                    </tr>
                </thead>
                {/* modals start */}
                <EditModal isShow={isShowEdit} submitHandler={() => submitHandler()} onClose={showEditHandler}>
                    <div className='input-parent'>
                        <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>اسم :</label>
                        <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} className='editInput' placeholder='اسم محصول را بنویسید' />
                    </div>
                    <div className='input-parent'>
                        <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>قیمت :</label>
                        <input type="number" value={priceValue} onChange={(e) => setPriceValue(e.target.value)} className='editInput' placeholder='قیمت محصول را بنویسید' />
                    </div>
                    <div className='input-parent'>
                        <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>عکس :</label>
                        <input type="text" value={imgValue} onChange={(e) => setImgValue(e.target.value)} className='editInput' placeholder='قیمت محصول را بنویسید' />
                    </div>
                    <div className='input-parent'>
                        <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>موجودی :</label>
                        <input type="number" value={countValue} onChange={(e) => setCountValue(e.target.value)} className='editInput' placeholder='موجودی محصول را بنویسید' />
                    </div>
                    <div className='input-parent'>
                        <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>محبوبیت :</label>
                        <input type="number" value={popularityValue} onChange={(e) => setPopularityValue(e.target.value)} className='editInput' placeholder='میزان محبوبیت محصول را بنویسید' />
                    </div>
                    <div className='input-parent'>
                        <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>فروش :</label>
                        <input type="number" value={saleValue} onChange={(e) => setSaleValue(e.target.value)} className='editInput' placeholder='میزان فروش محصول را بنویسید' />
                    </div>
                    <div className='input-parent'>
                        <label style={{ marginTop: 14, marginLeft: 9, width: 72 }}>رنگ بندی :</label>
                        <input type="number" value={colorsValue} onChange={(e) => setColorsValue(e.target.value)} className='editInput' placeholder='تعداد رنگ بندی محصول را بنویسید' />
                    </div>

                </EditModal>

                <Modal acceptFunc={() => {
                    acceptFunc()
                }} rejectFunc={rejectFunc} isShow={isShowModal} />
                <DetailsModal isShow={isShowDetails} closeModal={showDetailsModalHandler} popularity={popularity} title={title} price={price} />
                {/* modals end */}
                <tbody>

                    {
                        allProducts.map(product => (
                            <tr key={product.id}>
                                <td><img className='productImg' src={product.img} alt="" /></td>
                                <td>{product.title}</td>
                                <td>{product.price + " "}تومان</td>
                                <td>{product.count}</td>
                                <td>
                                    <button className='tableBtn' onClick={() => {
                                        showDetailsModalHandler()
                                        setPopularity(product.popularity)
                                        setTitle(product.title)
                                        setPrice(product.price)
                                    }}>جزییات</button>
                                    <button className='tableBtn' onClick={() => {
                                        showModalHandler()
                                        setProductID(product.id)
                                    }}>حذف</button>
                                    <button className='tableBtn' onClick={() => {
                                        showEditHandler()
                                        setProductID(product.id)
                                        setNameValue(product.title)
                                        setPriceValue(product.price)
                                        setCountValue(product.count)
                                        setPopularityValue(product.popularity)
                                        setImgValue(product.img)
                                        setSaleValue(product.sale)
                                        setColorsValue(product.colors)
                                    }}>ویرایش</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table >
        </>
    )
}
