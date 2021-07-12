import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map(videoObj => {
        return <VideoItem videoObj={videoObj} />;
    });

    return (
        <div className='ui relaxed divided list'>{renderedList}</div>
    );
}

export default VideoList;