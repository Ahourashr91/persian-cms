import React, { useEffect, useState } from 'react'
import ErrorBox from '../../components/errorBox/ErrorBox'
import CommentModal from '../../components/commentModal/CommentModal'
import Modal from './../../components/modal/Modal'
import EditCommentModal from './../../components/editCommentModal/EditCommentModal'
import AcceptModal from '../../components/acceptModal/AcceptModal'

export default function Comments() {
    const url = "http://localhost:3000/comments"
    const [comments, setComments] = useState([])
   
    const [commentMessage, setCommentMessage] = useState("")
    const [commentDate, setCommentDate] = useState("")
    const [commentHour, setCommentHour] = useState("")
    const [commentUserID, setCommentUserID] = useState("")
    const [commentProductID, setCommentProductID] = useState("")
    const [commentAccept, setCommentAccept] = useState(null)
    
    const [isShowComment, setIsShowComment] = useState(false)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [commentID, setCommentID] = useState(null)

    const [isShowEditComment, setIsShowEditComment] = useState(false)
    const [isShowAcceptModal, setIsShowAcceptModal] = useState(false)
    const [isShowRejectModal, setIsShowRejectModal] = useState(false)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [comments])

    // functions start

    const showCommentHandler = () => {
        setIsShowComment(prev => !prev)
    }

    const showEditCommentHandler = () => {
        setIsShowEditComment(prev => !prev)
    }

    const editComment = () => {
        console.log("اطلاعات ثبت شد!");
        showEditCommentHandler()

        fetch(`${url}/${commentID}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                body: commentMessage,
                date: commentDate,
                hour: commentHour,
                userID: commentUserID,
                productID: commentProductID,
                isReply: 0,
                replyId: 0,
                isAccept: commentAccept
            })
        })
            .then(res => console.log(res))
    }

    const acceptDelete = () => {
        setIsShowDeleteModal(prev => !prev)
        fetch(`${url}/${commentID}`, {
            method: "DELETE"
        }).then(res => console.log(res))
    }

    const rejectDelete = () => {
        setIsShowDeleteModal(prev => !prev)
    }

    const acceptComment = () => {
        setIsShowAcceptModal(false)

        fetch(`${url}/${commentID}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                body: commentMessage,
                date: commentDate,
                hour: commentHour,
                userID: commentUserID,
                productID: commentProductID,
                isReply: 0,
                replyId: 0,
                isAccept: 1
            })
        })
            .then(res => console.log(res))
    }

    const rejectComment = () => {
        setIsShowRejectModal(false)

        fetch(`${url}/${commentID}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                body: commentMessage,
                date: commentDate,
                hour: commentHour,
                userID: commentUserID,
                productID: commentProductID,
                isReply: 0,
                replyId: 0,
                isAccept: 0
            })
        })
            .then(res => console.log(res))
    }

    // functions end

    return (
        <div>
            {/* modals start */}
            <CommentModal message={commentMessage} isShow={isShowComment} onClose={showCommentHandler} />
            <EditCommentModal isShow={isShowEditComment} submit={editComment}>
                <div className='ta-parent'>
                    <textarea value={commentMessage} onChange={(e) => setCommentMessage(e.target.value)} cols="50" rows="3"></textarea>
                </div>
            </EditCommentModal>
            <AcceptModal message={`آیا از تایید اطمینان دارید`} isShow={isShowAcceptModal} acceptFunc={acceptComment} rejectFunc={() => setIsShowAcceptModal(false)} />
            <AcceptModal message={`آیا از رد اطمینان دارید`} isShow={isShowRejectModal} acceptFunc={rejectComment} rejectFunc={() => setIsShowRejectModal(false)} />
            {/* modals end */}
            {comments.length === 0 ?
                <ErrorBox message="هیچ کامنتی نوشته نشده!" />
                : (
                    <table className='productsTable'>
                        <thead>
                            <tr>
                                <th style={{ width: 160 }}>اسم کاربر</th>
                                <th style={{ width: 160 }}>محصول</th>
                                <th style={{ width: 160 }}>کامنت</th>
                                <th style={{ width: 160 }}>تاریخ</th>
                                <th style={{ width: 160 }}>ساعت</th>
                            </tr>
                            <Modal acceptFunc={acceptDelete} rejectFunc={rejectDelete} isShow={isShowDeleteModal} />
                        </thead>
                        <tbody>
                            {comments.map(comment => (
                                <tr key={comment.id}>
                                    <td style={{ width: 160 }}>{comment.userID}</td>
                                    <td style={{ width: 160 }}>{comment.productID}</td>
                                    <td style={{ width: 160 }}><button onClick={() => {
                                        showCommentHandler()
                                        setCommentMessage(comment.body)
                                    }} className='tableBtn'>دیدن متن</button></td>
                                    <td style={{ width: 160 }}>{comment.date}</td>
                                    <td style={{ width: 160 }}>{comment.hour}</td>
                                    <td style={{ width: 300 }}>
                                        <button className='tableBtn' onClick={() => {
                                            setIsShowDeleteModal(true)
                                            setCommentID(comment.id)
                                        }}>حذف</button>
                                        <button className='tableBtn' onClick={() => {
                                            showEditCommentHandler()
                                            setCommentMessage(comment.body)
                                            setCommentID(comment.id)
                                            setCommentDate(comment.date)
                                            setCommentHour(comment.hour)
                                            setCommentUserID(comment.userID)
                                            setCommentProductID(comment.productID)
                                            setCommentAccept(comment.isAccept)
                                        }}>ویرایش</button>
                                        <button className='tableBtn'>پاسخ</button>
                                        {comment.isAccept === 0 ? <button className='tableBtn' onClick={() => {
                                            setIsShowAcceptModal(true)
                                            setCommentMessage(comment.body)
                                            setCommentID(comment.id)
                                            setCommentDate(comment.date)
                                            setCommentHour(comment.hour)
                                            setCommentUserID(comment.userID)
                                            setCommentProductID(comment.productID)
                                            setCommentAccept(comment.isAccept)
                                        }}>تایید</button> : <button className='tableBtn' onClick={() => {
                                            setIsShowRejectModal(true)
                                            setCommentMessage(comment.body)
                                            setCommentID(comment.id)
                                            setCommentDate(comment.date)
                                            setCommentHour(comment.hour)
                                            setCommentUserID(comment.userID)
                                            setCommentProductID(comment.productID)
                                            setCommentAccept(comment.isAccept)
                                        }}>رد</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}
