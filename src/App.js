import React from 'react';
import './App.css';
import NavHeader from './component/NavHeader';
// import MainPageSlider from './component/MainPageSlider';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ItemsPage from './pages/ItemsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ItemDetailPage from './pages/ItemDetailPage';

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
        <Route path = "/search/:name" component = {ItemsPage}/>
        <Route path = "/register" component = {RegisterPage}/>
        <Route path = "/login" component = {LoginPage} />
        <Route path = "/trial/details" component = {ItemDetailPage}/>
        {/* <Route exact path = "" component = {}/> */}
      </Switch>
    </div>
  );
}

export default App;
