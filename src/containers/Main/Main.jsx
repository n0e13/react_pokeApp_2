import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../../views/Home';
import AddNew from '../../views/AddNew';
import Details from '../../views/Details';
import Error from '../../views/Error';
import Search from '../../views/Search';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<AddNew />} path='/new' />
        <Route element={<Details />} path='/pokemon/:id' />
        <Route element={<Search />} path='/search' />
        <Route element={<Error />} path='*' />
      </Routes>
    </main>
  )
};

export default Main;
