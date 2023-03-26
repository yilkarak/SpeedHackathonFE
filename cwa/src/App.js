
import React, { Component, useContext } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import * as routes from "./routes/manifest";
import AuthRoute from './AuthRoute/AuthRoute';

import LoginPage from './Pages/LoginPage/LoginPage';

import Dashboard from './Pages/Dashboard/Dashboard';
import RewardsPage from './Pages/RewardsPage/RewardsPage';

import './App.css';
import ManufacturersPage from './Pages/ManufacturersPage/ManufacturersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={routes.Login} element={<LoginPage/>}/>
        <Route exact path={routes.Manufacturer} element={<ManufacturersPage/>}/>
        <Route exact path={routes.Dashboard} element={<AuthRoute><Dashboard/></AuthRoute>}/>
        <Route exact path={routes.Rewards} element={<AuthRoute><RewardsPage/></AuthRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
