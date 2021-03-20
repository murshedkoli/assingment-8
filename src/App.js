import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import SinglePage from './Component/SinglePage/SinglePage';
import Notfound from './Component/NotFound/Notfound';

function App() {



  return (
    <div className="mainapp" >
     <Router>
       <Switch>
         <Route exact path="/">
         
           <Home></Home>
         </Route>
         <Route path="/league/:idLeague">
           <SinglePage></SinglePage>
         </Route>
         <Route path="*">
           <Notfound></Notfound>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
