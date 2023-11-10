import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.log('test')
window.onload = function () {
  const scrollDownMessage = document.getElementById('scrollDownMessage');
  var checkScroll = setInterval(function () {
    if (window.scrollY >= 750) {
      scrollDownMessage.style.display = 'none'
      clearInterval(checkScroll)
    } else {
      console.log(1 - (window.scrollY / 750))
      scrollDownMessage.style.opacity = 1 - (window.scrollY / 750)
    }
  }, 10)
}