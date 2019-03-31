import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import TitleList from './Components/Titles/TitleList/TitleList';
import EmployeeList from './Components/Employees/EmployeeList/EmployeeList'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Components/Login/Login';


class App extends Component {
  render(props) {

    return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route path="/" exact component={Login} />
            <Route path="/titles" exact component={TitleList} />
            <Route path="/employees/:id" render={(props) => (
              <EmployeeList key={props.match.params.id} {...props} />)
            } />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
