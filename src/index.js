import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// let oldIndex = 1;

// document.getElementsByTagName("i").disabled = true;

// const item1 = document.getElementById("item-1");
// const item2 = document.getElementById("item-2");
// const item3 = document.getElementById("item-3");

// let actived = (e) => {
  
//   let newIndex = e.path[0];
//   document.getElementById("item-" + oldIndex).classList.remove("actived");
//   document.getElementById("item"- newIndex).classList.add("actived");

//   console.log(this);
//   oldIndex = newIndex;

// }

// item1.addEventListener("click", actived);
// item2.addEventListener("click", actived);
// item3.addEventListener("click", actived);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
