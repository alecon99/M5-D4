import NavigationBar from "./components/NavigationBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { createContext, useEffect, useState,useContext } from "react";
import Main from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";
import { BooksProvider } from "./context/BooksContext";

export const BookState = createContext()

function App() {

  return (
    <>
        <ThemeProvider>
          <BooksProvider>
          <NavigationBar />
          <Welcome />
          <Main />
          <MyFooter />
          </BooksProvider>
        </ThemeProvider>
    </>
  );
}

export default App;
