import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import BPMenu from './pages/BPMenu';
import BPHome from './pages/BPHome';
import BPInput from './pages/BPInput';
import BPHistory from './pages/BPHistory';
import BPStatistics from './pages/BPStatistics';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BPMenu/>
      <Switch>
        <Route exact path='/' component={BPHome}/>
        <Route path='/bpinput' component={BPInput}/>
        <Route path='/bphistory' component={BPHistory}/>
        <Route path='/bpstatistics' component={BPStatistics}/>
      </Switch>
      </div>
    );
  }
}

export default App;
