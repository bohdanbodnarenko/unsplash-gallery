import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './Components/Header/Header';
import HomeLayout from './Containers/HomeLayout/HomeLayout';
import SearchLayout from './Containers/SearchLayout/SearchLayout';
import DetailPost from './Containers/DetailPost/DetailPost';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div style={{paddingTop:'16vh'}}>
          <Switch>
            <Route path='/search/:query'  component={SearchLayout} />
            <Route path='/post/:id'  component={DetailPost} />
            <Route path='/'  component={HomeLayout} />
          </Switch>
        </div>
        {/* <Route path='/' component={HomeLayout} /> */}
      </div>
    );
  }
}

export default App;
