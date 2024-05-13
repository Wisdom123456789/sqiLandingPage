import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import ComponentFirst from './ComponentFirst';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';
import ComponentFive from './ComponentFive';
import ComponentSix from './ComponentSix';
import ComponentSeven from './ComponentSeven';
import ComponentEight from './ComponentEight';
import ComponentNine from './ComponentNine';
import ComponentTen from './ComponentTen';
import ComponentEleven from './ComponentEleven';
import ComponentTwelve from './ComponentTwelve';
import ComponentLast from './ComponentLast';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ComponentFirst />
    <ComponentTwo />
    <ComponentThree />
    <ComponentFour />
    <ComponentFive />
    <ComponentSix />
    <ComponentSeven />
    <ComponentEight />
    <ComponentNine />
    <ComponentTen />
    <ComponentEleven />
    <ComponentTwelve />
    <ComponentLast />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
