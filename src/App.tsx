import React from 'react';
import './App.css';
import { Search } from 'components/Search';
import { PersonCard } from 'components/PersonCard';

export const App = () => (
  <div className="App">
    <Search />
    <PersonCard />
  </div>
);
