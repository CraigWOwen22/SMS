import react, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from './StudentList';
import StudentEdit from "./StudentEdit";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/students/:id' component={StudentEdit}/>
            <Route exact path='/students' component={StudentList}/>
            <Route exact path='/' component={Home}/>
          </Switch>
        </Router>
    )
  }
}

export default App;