import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
//import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG3eR5nMNMXdCWZAEi0XgVJClxXsIZ8AU",
  authDomain: "react-ipod-82be8.firebaseapp.com",
  projectId: "react-ipod-82be8",
  storageBucket: "react-ipod-82be8.appspot.com",
  messagingSenderId: "533872681631",
  appId: "1:533872681631:web:8c27926dad19d489bc38aa"
};
  // Initialize Firebase
  ///firebase.initializeApp(firebaseConfig);
   firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
