import React, { Component } from 'react';
import  FormFavoritedFilm  from  './FormFavoritedFilm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FormFavoritedFilm />
        </header>
      </div>
    );
  }
}

export default App;
