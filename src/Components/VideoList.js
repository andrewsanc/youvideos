import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(videoObj => {
        return <VideoItem onVideoSelect={onVideoSelect} videoObj={videoObj} />;
    });

    return (
        <div className='ui relaxed divided list'>{renderedList}</div>
    );
}

export default VideoList;