import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';

const CardBook = ({ img, title, price, asin }) => {
    const [ selected , setSelected] = useState(false)
    const toggleSelected = ()=> setSelected(!selected)

    return (
        <>
            <Card
                onClick={toggleSelected}
                className={`${selected ? 'border border-2 border-danger shadow' : null}`}
                style={{ marginBottom: '10px' }}
            >
                <Card.Img
                    variant="top"
                    src={img}
                    style={{
                        height: "400px",
                        objectFit: "cover"
                    }} />
                <Card.Body>
                    <Card.Title
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}
                    >{title}</Card.Title>
                    <Card.Text>€ {price}</Card.Text>
                </Card.Body>
            </Card>
            {selected && <CommentArea asin={asin} setSelected={setSelected}/>}
        </>
    )
}

export default CardBook