import React from 'react'

export default function ErrorBox({ message }) {
    return (
        <div className='errorbox'>
            <p className='errorboxMessage'>{message}</p>
        </div>
    )
}
