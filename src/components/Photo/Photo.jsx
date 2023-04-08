import React from 'react';

const Photo = ({album}) => {
    console.log(album)
    const {id,thumbnailUrl,title,albumId,} = album
    return (
        <div className='border border-b-gray-500 p-3'>
            <img src={thumbnailUrl} alt="" />
        </div>
    );
};

export default Photo;