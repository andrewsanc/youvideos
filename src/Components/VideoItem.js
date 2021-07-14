import React from 'react';
import './VideoItem.css';

const VideoItem = ({ videoObj, onVideoSelect }) => {
    if (videoObj.hasOwnProperty('snippet')) {
        return (
            <div onClick={() => onVideoSelect(videoObj)} className='video-item item'>
                <img className='ui image' src={videoObj.snippet.thumbnails.medium.url} alt="Thumbnail {{videoObj.snippet.title}}" />
                <div className='content'>
                    <div className='header'>{videoObj.snippet.title}</div>
                </div>
            </div>
        );
    }

    return null;
}

export default VideoItem;