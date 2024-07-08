import React, { Fragment } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Books from "./components/pages/Books";
import MyBookShelf from "./components/pages/MyBookShelf";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/common/Header";
import BooksDataProvider from "./contexts/BooksContext";


function App() {
  return (
    <Fragment>
      <BooksDataProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/booksShelf" element={<MyBookShelf />} />
          </Routes>
        </BrowserRouter>
      </BooksDataProvider>
      <ToastContainer />
    </Fragment>
  );
}

export default App;

