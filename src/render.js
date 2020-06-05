import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText} from './Redux/state';

//addPost('SamurayJS');
export let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
