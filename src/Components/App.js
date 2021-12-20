import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../APIs/youtube";
import "./App.css";

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchMostPopularVideos = async () => {
      const response = await youtube.get("/videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
        },
      });

      setSelectedVideo(response.data.items[0]);
      setVideoList(response.data.items.slice(1));
    };

    fetchMostPopularVideos();
  }, []);

  const fetchYoutubeVideos = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        q: term,
        type: "video",
      },
    });

    setVideoList(response.data.items.slice(1));
    setSelectedVideo(response.data.items[0]);
  };

  const retrieveRelatedVideos = async (videoId) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: videoId,
        type: "video",
      },
    });

    setVideoList(response.data.items.slice(0, 5));
  };

  const onVideoSelect = (selectedVideo) => {
    setSelectedVideo(selectedVideo);

    const videoId = selectedVideo.id.videoId
      ? selectedVideo.id.videoId
      : selectedVideo.id;
    retrieveRelatedVideos(videoId);
  };

  return (
    <div className='ui container'>
      <SearchBar fetchYoutubeVideos={fetchYoutubeVideos} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={onVideoSelect} videoList={videoList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
