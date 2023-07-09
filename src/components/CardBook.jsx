import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { SelectionContext } from '../context/SelectionContext';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const CardBook = ({ img, title, price, asin }) => {
    
    const { setSelected} = useContext(SelectionContext)

    const buttonSetSelected = () => {
        setSelected({id: asin, bookTitle:title})
    }

    return (
        <>
            <Card
            className='overflow-hidden'
                style={{ marginBottom: '10px'}}
            >
                <Card.Img
                    variant="top"
                    src={img}
                    style={{
                        height: "400px",
                        objectFit: "cover"
                    }} 
                />
                <Card.Body
                    className="p-0"
                > 
                    <div className='p-2'>
                        <Card.Title
                            style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"}}
                        >
                            {title}
                        </Card.Title>
                        <Card.Text>
                            € {price}
                        </Card.Text>
                    </div>
                    <div className='row'>
                        <Button 
                            onClick={buttonSetSelected}
                            className='btn-secondary rounded-0 col-6'
                        >
                            <FontAwesomeIcon icon={faComments} />
                        </Button>
                        <Link 
                            onClick={buttonSetSelected}
                            className='btn btn-dark rounded-0 col-6' 
                            to={`/book/${asin}`}
                        >
                            <FontAwesomeIcon icon={faCircleInfo} />
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardBook