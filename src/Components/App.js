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

  async componentDidMount() {
    const response = await youtube.get('/videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular'
      }
    });

    this.setState({ 
      videos: response.data.items.slice(1), 
      selectedVideo: response.data.items[0], 
    });
  }

  // Makes request to YouTubeAPI and set state to response
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        q: term,
        type: 'video',
      }
    });

    this.setState({ 
      videos: response.data.items, 
      selectedVideo: response.data.items[0] 
    });
  }

  onVideoSelect = (selectedVideo) => {
    this.setState({ selectedVideo });

    const videoId = selectedVideo.id.videoId ? selectedVideo.id.videoId : selectedVideo.id;
    this.retrieveRelatedVideos(videoId);
  }

  retrieveRelatedVideos = async (videoId) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        relatedToVideoId: videoId,
        type: 'video'
      }
    });
    
    this.setState({
      videos: response.data.items.slice(0, 5),
    });
  }
  
  render() {

    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
