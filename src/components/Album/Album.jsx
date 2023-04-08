import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from '../Photo/Photo';

const Album = () => {
    const albums = useLoaderData()
    // console.log(albums)
    return (
        <div className=''>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    albums.map(album => <Photo album={album}></Photo>)
                }
            </div>
        </div>
    );
};

export default Album;