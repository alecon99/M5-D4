import React from 'react'

import RemoveComment from './RemoveComment'
import ModifyComment from './ModifyComment'

const CommentList = ({ author, comment, rate, id }) => {
    return (
        <>
            <li className='mb-3 border rounded-3 list-group-item bg-light'>
                <div className='overflow-hidden'>User: {author}</div>
                <div className='overflow-hidden'>Comment: {comment}</div>
                <div >Rate: {rate}</div>
                <div className='text-end'>
                    <RemoveComment 
                        commentId={id}
                    />
                    <ModifyComment 
                        commentId={id}
                        comment={comment}
                        rate={rate}
                    />
                </div>
            </li>
        </>
    )
}

export default CommentList