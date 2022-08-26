import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from 'components/Main';
import { routerConfig } from 'configs/routing/router-config';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export const App = () => (
  <div className="App">
    <div className="main-app-wrapper">
      <Header />
      <Routes>
        <Route key={routerConfig.path} path={routerConfig.path} element={<Main />} />
      </Routes>
      <Footer />
    </div>
  </div>
);
