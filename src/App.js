import React from "react";
import "./reset.css";
import "./App.css";
import EmployeesList from "./containers/EmployeesList/EmployeesList";
import Worklog from "./containers/Worklog/Worklog";
import {Route, Switch} from 'react-router-dom'

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path='/' component={EmployeesList}/>
      <Route path='/worklog/:id' component={Worklog}/>
    </Switch>
  </div>
);

export default App;

