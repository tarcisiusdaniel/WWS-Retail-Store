import React from 'react';
import './App.css';
import NavHeader from './component/NavHeader';
// import MainPageSlider from './component/MainPageSlider';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FlyKnitPage from './pages/FlyKnitPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <NavHeader/>
      <Switch>
        <Route exact path = "/" component = {MainPage}/>
        <Route path = "/search/:name" component = {FlyKnitPage}/>
        <Route path = "/register" component = {RegisterPage}/>
        <Route path = "/login" component = {LoginPage} />
        {/* <Route exact path = "" component = {}/>
        <Route exact path = "" component = {}/> */}
      </Switch>
    </div>
  );
}

export default App;
