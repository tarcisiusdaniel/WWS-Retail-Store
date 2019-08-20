import React from 'react';
import './App.css';
import NavHeader from './component/NavHeader';
// import MainPageSlider from './component/MainPageSlider';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FlyKnitPage from './pages/FlyKnitPage';
import AutoCompleteSearchBar from './component/AutoCompleteSearchBar';

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
      <NavHeader />
      {/* <MainPageSlider /> */}
      <Switch>
        <Route exact path = "/" component = {MainPage}/>
        <Route exact path = "/flyknit/" component = {FlyKnitPage}/>
        {/* <Route exact path = "" component = {}/>
        <Route exact path = "" component = {}/>
        <Route exact path = "" component = {}/> */}
      </Switch>

    </div>

    // <div>
    //   <AutoCompleteSearchBar />
    // </div>
  );
}

export default App;
