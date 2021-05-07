import React from 'react';
import './App.css';
import List from './components/List/List';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <h2 className="title">StarWarsApi</h2>
      <List />
    </Layout>
  );
}

export default App;
