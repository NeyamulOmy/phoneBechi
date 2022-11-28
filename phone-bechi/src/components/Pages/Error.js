import React from 'react';
import errorImage from '../../assets/images/errorImage.jpg'
const Error = () => {
    return (
        <div className='w-full mt-5 '>
            <h1 className='text-4xl'>Oops!!! Can't find requested URL</h1>
            <img className='mx-auto' src={errorImage} alt="Error 404" />
        </div>
    );
};

export default Error;