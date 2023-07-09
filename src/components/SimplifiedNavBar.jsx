import {useContext} from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';

import { ThemeContext } from '../context/ThemeContext';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export const SimplifiedNavBar = () => {

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
                className='navbar-nav nav-link ' 
                to={"/"}
              > 
                Home
              </Link>
            </Nav>
            <div className='d-flex'>
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

export default SimplifiedNavBar