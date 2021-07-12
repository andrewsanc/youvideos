import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
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

  // Makes request to YouTubeAPI
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      q: term,
    });

    this.setState({ videos: response.data.items });
  }

  onVideoSelect = (selectedVideo) => {
    this.setState({ selectedVideo });
  }
  
  render() {

    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    )
  }
}

export default App;
