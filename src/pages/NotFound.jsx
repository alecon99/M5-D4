import { useContext } from "react";

import SimplifiedNavBar from "../components/SimplifiedNavBar";
import MyFooter from '../components/MyFooter'

import { ThemeContext } from "../context/ThemeContext";

const NotFound = () => {
  const myThemeContext = useContext(ThemeContext)
  const { dark } = myThemeContext

    return (
        <>
            <SimplifiedNavBar />
            <div className={`text-center fs-1 py-4 my-4 ${dark ? 'text-white' : 'text-dark'}`}>Page not found</div>
            <div className="fixed-bottom">
                <MyFooter/>
            </div>
            
        </>
    )
}

export default NotFound