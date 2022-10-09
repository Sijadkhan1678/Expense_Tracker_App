import React from 'react'
import './App.css';
import  Header  from './components/Header';
import  Balance from './components/Balance';
import  TransactionHistory  from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import Navbar from './components/Navbar';
import AppState from './context/AppState';

 const App: React.FC = () => {
   
  return (
    <AppState>
    <div>
    <div className="container">
      <Header />
      <Balance /> 
      <TransactionHistory />
      <AddTransaction />
      <Navbar />
    </div>
    </div>
    </AppState>
  );
}

export default App;
