import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((videoObj, index) => {
    const videoId = videoObj.id.videoId ? videoObj.id.videoId : videoObj.id;
    return (
      <VideoItem
        key={videoId}
        onVideoSelect={onVideoSelect}
        videoObj={videoObj}
      />
    );
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
