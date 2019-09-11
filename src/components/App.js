import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import MainPage from './MainPage';
import FolderRoute from './FolderRoute';
import NotFoundPage from './NotFoundPage';
import Note from './Note'

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
          render={()=><MainPage 
            folders ={this.state.folders}
            notes = {this.state.notes}
          />}
          />
          <Route
          exact path='/folder/:folderId'
          render={(routeProps)=><FolderRoute 
            folders ={this.state.folders}
            notes = {this.state.notes}
            {...routeProps}
          />}
          />
           <Route
          exact path='/note/:noteId'
          render={(routeProps)=><Note
            folders ={this.state.folders}
            notes = {this.state.notes}
            {...routeProps}
          />}
          />
          <Route component={NotFoundPage}/>
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
