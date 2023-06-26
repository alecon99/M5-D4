import React from 'react'

const CommentList = ({ author, comment, rate }) => {
    return (
        <>
            <li className='mb-3 border rounded-3 list-group-item bg-light'>
                <div>User: {author}</div>
                <div>Comment: {comment}</div>
                <div >Rate: {rate}</div>
            </li>
        </>
    )
}

export default CommentList