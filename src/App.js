import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Home from './Component/Home/Home';
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
