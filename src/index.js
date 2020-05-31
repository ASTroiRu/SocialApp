import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id:1, post: 'Hello, how are you???', likesCount: 15},
  {id:1, post: 'My name is Alex', likesCount: 26},
  {id:1, post: 'It is my first message', likesCount: 114}
]
let message = [
  {id:1, type:'in', messageText:'Привет, Саша!'},
  {id:2, type:'out', messageText:'Привет!!!'}
]
let dialogs = [
  {id: 1, name: 'Alex'},
  {id: 2, name: 'Boris'},
  {id: 3, name: 'Vasiliy'},
  {id: 4, name: 'Natulek'},
  {id: 5, name: 'Mama'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} message={message} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
