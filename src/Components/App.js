import React from 'react';
import SearchBar from './SearchBar';
import './App.css';

console.log(process.env.REACT_APP_YOUTUBE_API_KEY)

class App extends React.Component {
  
  render() {

    return (
      <div className='ui container'>
        <SearchBar />
      </div>
    )
  }
}

export default App;
