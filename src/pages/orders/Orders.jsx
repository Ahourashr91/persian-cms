import React, { useEffect, useState } from 'react'
import ErrorBox from '../../components/errorBox/ErrorBox'
import DeleteModal from './../../components/modal/Modal'
import OrderDetails from './../../components/orderDetails/OrderDetails'
import SendOrderModal from '../../components/sendOrderModal/SendOrderModal'

export default function Orders() {
    const [allOrders, setAllOrders] = useState([])

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowDetails, setIsShowDetails] = useState(false)
    const [isShowSend, setIsShowSend] = useState(false)
    const [isShowStopSend, setIsShowStopSend] = useState(false)

    const [orderID, setOrderID] = useState(null)

    const [orderCount, setOrderCount] = useState(null)
    const [orderPrice, setOrderPrice] = useState(null)
    const [orderPopularity, setOrderPopularity] = useState(null)
    const [orderProductID, setOrderProductID] = useState("")
    const [orderUserID, setOrderUserID] = useState("")
    const [orderDate, setOrderDate] = useState("")
    const [orderHour, setOrderHour] = useState("")
    const [orderOff, setOrderOff] = useState(null)
    const [orderAllPrice, setOrderAllPrice] = useState(null)
    const [orderSaleCount, setOrderSaleCount] = useState(null)

    const url = "http://localhost:3000/orders"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders])

    // functions start

    const acceptDelete = () => {
        setIsShowDeleteModal(false)

        fetch(`${url}/${orderID}`, {
            method: "DELETE"
        })
    }

    const acceptSend = () => {
        fetch(`${url}/${orderID}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                count: orderCount,
                price: orderPrice,
                popularity: orderPopularity,
                productID: orderProductID,
                userID: orderUserID,
                isActive: 1,
                date: orderDate,
                hour: orderHour,
                off: orderOff,
                allPrice: orderAllPrice,
                saleCount: orderSaleCount
            })
        })
        setIsShowSend(false)
    }

    const stopSend = () => {
        fetch(`${url}/${orderID}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                count: orderCount,
                price: orderPrice,
                popularity: orderPopularity,
                productID: orderProductID,
                userID: orderUserID,
                isActive: 0,
                date: orderDate,
                hour: orderHour,
                off: orderOff,
                allPrice: orderAllPrice,
                saleCount: orderSaleCount
            })
        })
        setIsShowStopSend(false)
    }

    // functions end

    return (
        <div>
            {
                allOrders.length === 0 ? (
                    <ErrorBox message="هیچ سفارشی ثبت نشده!" />
                ) : (
                    <>
                        {/* modals start */}
                        <DeleteModal rejectFunc={() => setIsShowDeleteModal(false)} acceptFunc={acceptDelete} isShow={isShowDeleteModal} />
                        <OrderDetails closeModal={() => setIsShowDetails(false)} count={orderCount} popularity={orderPopularity} price={orderPrice} isShow={isShowDetails} />
                        <SendOrderModal isShow={isShowSend} rejectFunc={() => setIsShowSend(false)} message={`آیا از ارسال اطمینان دارید؟`} acceptFunc={acceptSend} />
                        <SendOrderModal isShow={isShowStopSend} rejectFunc={() => setIsShowStopSend(false)} message={`آیا از توفق ارسال اطمینان دارید؟`} acceptFunc={stopSend} />
                        {/* modals end */}
                        <table className='productsTable'>
                            <thead>
                                <tr>
                                    <th>اسم کاربر</th>
                                    <th>محصول</th>
                                    <th>تاریخ</th>
                                    <th>ساعت</th>
                                    <th>مبلغ</th>
                                    <th>تخفیف</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allOrders.map(order => (
                                        <tr key={order.id}>
                                            <td>{order.userID}</td>
                                            <td>{order.productID}</td>
                                            <td>{order.date}</td>
                                            <td>{order.hour}</td>
                                            <td>{order.price}</td>
                                            <td>{order.off}</td>
                                            <td style={{ width: 380 }}>
                                                <button className='tableBtn' onClick={() => {
                                                    setIsShowDeleteModal(true)
                                                    setOrderID(order.id)
                                                }}>حذف</button>
                                                <button className='tableBtn' onClick={() => {
                                                    setIsShowDetails(true)
                                                    setOrderCount(order.count)
                                                    setOrderPrice(order.allPrice)
                                                    setOrderPopularity(order.popularity)
                                                }}>جزییات</button>
                                                {order.isActive === 0 ? (
                                                    <button className='tableBtn' onClick={() => {
                                                        setOrderCount(order.count)
                                                        setOrderPrice(order.price)
                                                        setOrderPopularity(order.popularity)
                                                        setOrderProductID(order.productID)
                                                        setOrderUserID(order.userID)
                                                        setOrderDate(order.date)
                                                        setOrderHour(order.hour)
                                                        setOrderOff(order.off)
                                                        setOrderID(order.id)
                                                        setOrderAllPrice(order.allPrice)
                                                        setOrderSaleCount(order.saleCount)
                                                        setIsShowSend(true)
                                                    }}>ارسال</button>
                                                ) : (
                                                    <button className='tableBtn' onClick={() => {
                                                        setOrderCount(order.count)
                                                        setOrderPrice(order.price)
                                                        setOrderPopularity(order.popularity)
                                                        setOrderProductID(order.productID)
                                                        setOrderUserID(order.userID)
                                                        setOrderDate(order.date)
                                                        setOrderHour(order.hour)
                                                        setOrderOff(order.off)
                                                        setOrderID(order.id)
                                                        setOrderAllPrice(order.allPrice)
                                                        setOrderSaleCount(order.saleCount)
                                                        setIsShowStopSend(true)
                                                    }}>توقف ارسال</button>
                                                )}
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
