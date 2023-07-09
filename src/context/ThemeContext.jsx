import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  useEffect(()=>{
    if(dark){
      document.body.className="dark-mode"
    } else {
      document.body.className="light-mode"
    }
  },[dark])
  
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};