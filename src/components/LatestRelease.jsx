import React, { useEffect, useState, useContext } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardBook from './CardBook'
import historyBooks from '../data/history.json'
import { BooksContext } from '../context/BooksContext'

const LatestRelease = () => {

    const myBooksContext = useContext(BooksContext)
    const { books, setBooks} = myBooksContext

    useEffect(()=>{
        setBooks(historyBooks)
      },[])

    return (
        <div className='pt-4'>
            <Row>
                {books && books.map((book) => {
                    return (
                        <Col key={book.asin} sm={6} md={6} lg={4}>
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
