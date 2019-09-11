import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import MainPage from './MainPage';
import FolderRoute from './FolderRoute';
import NotFoundPage from './NotFoundPage';

class App extends React.Component {
  state = {
    folders: this.props.store.folders,
    notes: this.props.store.notes
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
          exact path='/'
          component={MainPage}
          />
          <Route
          exact path='/folder/:folder-id'
          component={FolderRoute}
          />
          <Route component={NotFoundPage}/>
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
