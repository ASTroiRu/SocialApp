import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Nav';
import Profile from './components/Profile';
import Footer from './components/Footer';





const App = () => {
  return (
    <div className='conteiner'>
      <div className='wrapper'>
        <Header />
        <Navbar />
        <Profile />
        <Footer />
      </div>
    </div>

  );
}
export default App;
