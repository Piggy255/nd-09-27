import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Upgrade1(props){

  return (
    <>
      {props.count >= 10 ? <button onClick={props.onClick} className='upgrade'>
        <p>+1</p><p>cost: 10</p>
      </button> : <button onClick={props.onClick} className='upgrade noBuy'>
        <p>+1</p><p>cost: 10</p>
      </button>}
    </>
  )
}

function Upgrade2(props){
  return (
    <>
      {props.count >= 30 ? <button onClick={props.onClick} className='upgrade'>
        <p>+5</p><p>cost: 30</p>
      </button> : <button onClick={props.onClick} className='upgrade noBuy'>
        <p>+5</p><p>cost: 30</p>
      </button>}
    </>
  )
}

function App() {

  const [cookieCount, setCookieCount] = useState(0)
  const [cookiePower, setCookiePower] = useState(1)

  return (
    <div className="App">
      <h1>Cookies: {cookieCount}</h1>
      <h2>Clicking power: {cookiePower}</h2>
      <button onClick={() => {
        setCookieCount(cookieCount + cookiePower)
      }}>get cookies</button>
      <h3>Upgrades</h3>
      <div className='upgrades'>
        <Upgrade1 count={cookieCount} onClick={cookieCount >= 10 ? () => {setCookiePower(cookiePower+1); setCookieCount(cookieCount-10)} : () => {alert("Not enough cookies")}}/>
        <Upgrade2 count={cookieCount} onClick={cookieCount >= 30 ? () => {setCookiePower(cookiePower+5); setCookieCount(cookieCount-30)} : () => {alert("Not enough cookies")}}/>
      </div>
    </div>
  );
}

export default App;
