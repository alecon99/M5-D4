import { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../context/ThemeContext';

const NavigationBar = () => {

  const myThemeContext = useContext(ThemeContext)
  const { dark , toggleTheme } = myThemeContext

  const toggleBg = ()=> {toggleTheme()}

  useEffect(()=>{
    if(dark){
      document.body.className="dark-mode"
    } else {
      document.body.className="light-mode"
    }
  },[dark])

  return (
    <Navbar className={`${dark? 'bg-dark' : 'bg-light'}`}>
      <Container>
        <Nav >
          <Nav.Link className={`${dark ? 'text-white ' : null}`} href="#">Home</Nav.Link>
          <Nav.Link className={`${dark ? 'text-white ' : null}`} href="#">About</Nav.Link>
          <Nav.Link className={`${dark ? 'text-white ' : null}`} href="#">Browse</Nav.Link>
        </Nav>
        <div className='d-flex'>
          <SearchBar />
          <Button
            className='btn btn-dark border ms-3'
            type='submit'
            onClick={toggleBg}
          ><FontAwesomeIcon icon={faMoon} /></Button>
        </div>
      </Container>
  </Navbar>
  )
}

export default NavigationBar