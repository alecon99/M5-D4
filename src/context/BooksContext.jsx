import { createContext, useState, useEffect } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {

    const [books, setBooks] = useState(null);

    return (
      <BooksContext.Provider value={{ books, setBooks }}>
        {children}
      </BooksContext.Provider>
    );
  };