import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Album = () => {
    const album = useLoaderData()
    console.log(album)
    return (
        <div>
            
        </div>
    );
};

export default Album;