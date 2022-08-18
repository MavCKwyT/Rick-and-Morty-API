import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from 'components/Main';
import { routerConfig } from 'configs/routing/router-config';

export const App = () => (
  <div className="App">
    <div className="main-app-wrapper">
      <Routes>
        <Route key={routerConfig.path} path={routerConfig.path} element={<Main />} />
      </Routes>
    </div>
  </div>
);
