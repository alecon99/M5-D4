import React, { useEffect, useContext } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardBook from './CardBook'

import historyBooks from '../data/history.json'

import { BooksContext } from '../context/BooksContext'
import { SelectionContext } from '../context/SelectionContext'

const LatestRelease = () => {

    const { setSelected } = useContext(SelectionContext)

    const { books, setBooks} = useContext(BooksContext)

    useEffect(()=>{
        setBooks(historyBooks)
        setSelected({id:null,bookTitle:null})
      },[])

    return (
        <div className='pt-4'>
            <Row>
                {books && books.map((book) => {
                    return (
                        <Col key={book.asin} sm={12} md={6} lg={4}>
                            <CardBook
                                asin={book.asin}
                                img={book.img}
                                title={book.title}
                                price={book.price}
                            />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )  
}

export default LatestRelease
