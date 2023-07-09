import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from "./context/ThemeContext";
import { BooksProvider } from "./context/BooksContext";
import { SelectionProvider } from "./context/SelectionContext"
import { GetBooksCommentProvider } from './context/GetBooksCommentContext';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <BooksProvider>
        <SelectionProvider>
          <GetBooksCommentProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  exact path='/'
                  element={<HomePage />}
                />
                <Route
                  path='/book/:bookAsin'
                  element={<DetailPage />}
                />
                <Route
                  path='*'
                  element={<NotFound />}
                />
              </Routes>
            </BrowserRouter>
          </GetBooksCommentProvider>
        </SelectionProvider>
      </BooksProvider>
    </ThemeProvider>
  );
}

export default App;
