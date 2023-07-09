import { useContext } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';
import Button from 'react-bootstrap/esm/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext } from '../context/ThemeContext';

import { Link } from 'react-router-dom';

import BooksSelector from './BooksSelector';

const NavigationBar = () => {

  const { dark, toggleTheme } = useContext(ThemeContext)

  const toggleBg = () => { toggleTheme() }

  return (
    <Navbar 
      className={`${dark ? 'bg-dark' : 'bg-light'}`} 
      data-bs-theme={`${dark ? 'dark' : 'light'}`}
    >
      <Container>
        <Nav >
          <Link 
            className='navbar-nav nav-link' 
            to={"/"}
          > 
            Home
          </Link>
          <Nav.Link href="#">About</Nav.Link>
          <BooksSelector/>
        </Nav>
        <div className='d-flex'>
          <SearchBar />
          <Button
            className='btn btn-dark border ms-3'
            type='submit'
            onClick={toggleBg}
          >
            {dark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavigationBar