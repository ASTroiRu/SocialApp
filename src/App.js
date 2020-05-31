import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';







const App = (props) => {

  return (
    <BrowserRouter>
      <div className='conteiner'>
        <div className='wrapper'>
          <Header />
          <Navbar />
          <div className='wrapper-content'>
            {/* <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} /> */}

            <Route path='/profile' render={ () => <Profile posts={props.posts}/>} />
            <Route path='/dialogs' render={ () => <Dialogs message={props.message} dialogs={props.dialogs}/>} />
            <Route path='/news' render={ () => <News />} />
            <Route path='/music' render={ () => <Music />} />
            <Route path='/settings' render={ () => <Settings />} />

          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>


  );
}
export default App;
