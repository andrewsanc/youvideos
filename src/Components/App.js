import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../APIs/youtube';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null,
    }
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      q: term,
    });

    this.setState({ videos: response.data.items });
  }

  onVideoSelect = (selectedVideo) => {
    console.log(selectedVideo)
  }
  
  render() {

    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    )
  }
}

export default App;
