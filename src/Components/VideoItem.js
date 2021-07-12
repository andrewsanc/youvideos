import React from 'react';
import './VideoItem.css';

const VideoItem = ({ videoObj, onVideoSelect }) => {


    return (
        <div onClick={() => onVideoSelect(videoObj)} className='video-item item'>
            <img className='ui image' src={videoObj.snippet.thumbnails.medium.url} alt="Video Thumbnail" />
            <div className='content'>
                <div className='header'>{videoObj.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;