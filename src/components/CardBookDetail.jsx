import { useContext, useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner';

import { useParams } from 'react-router-dom';
import { BooksContext } from '../context/BooksContext'
import { GetBooksCommentContext } from '../context/GetBooksCommentContext';
import { ThemeContext } from '../context/ThemeContext';

import CommentList from '../components/CommentList';
import AddComment from '../components/AddComment';
import Container from 'react-bootstrap/esm/Container';

const CardBookDetail = () => {

    const { bookAsin } = useParams()

    const { dark } = useContext(ThemeContext)
  
    const { bookComments, getComment, isLoading } = useContext(GetBooksCommentContext)
  
    const { books } = useContext(BooksContext)
  
    const [bookDetail, setBookDetail] = useState([{ img: "", title: "", price: "", category: "" }])
  
    const filterBooks = () => {
      const filterBooks = books.filter((book) => book.asin.includes(bookAsin));
  
      setBookDetail(filterBooks);
    }

    useEffect(() => {
        filterBooks()
        getComment()
      }, [])
  
  return (
    <Container>
    <div className='d-flex flex-column align-items-center'>
    <div 
      style={{ maxWidth: "80%"}} 
      className={`${dark ? "text-white" : "" }`}
    > 
      <h5 className="mt-3 fs-3 text-center">
        {bookDetail[0].title}
      </h5>
      <div className='d-flex justify-content-center'>
        <p className=" me-5">
          Price: € {bookDetail[0].price}
        </p>
        <p>
          Category: {bookDetail[0].category}
        </p>
      </div>
    </div>
    <div 
      className="card" 
      style={{maxWidth: "800px"}} 
    >
      <div className="row g-0">
        <div className="col-md-6 p-4 text-center" >
          <img
            style={{ objectFit: "cover"}}
            src={bookDetail[0].img}
            className="img-fluid rounded-2"
            alt={bookDetail[0].title} />
        </div>
        <div className="col-md-6  my-4 px-4" >
          <h3>Comments:</h3>
          <div className='text-center'>
              {isLoading ? <Spinner className="m-4" animation="border" /> : null}
          </div>
          <div 
            style={{height: "450px"}} 
            className={`overflow-y-scroll ${!isLoading ? "" : "d-none"}`}
          >
            {bookComments.map((comment) => {
              return (
                <CommentList
                  key={comment._id}
                  id={comment._id}
                  author={comment.author}
                  comment={comment.comment}
                  rate={comment.rate}
                />
              )
            })}
          </div>
          <AddComment
            reviews={getComment}
          />
        </div>
      </div>
    </div>
    </div>
    </Container>
  )
}

export default CardBookDetail