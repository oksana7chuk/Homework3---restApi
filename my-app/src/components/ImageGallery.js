import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({images})=>(
    <ul className="ImageGallery">
        {images.map(({id,previewURL})=>(
        <li key={id} className="ImageGalleryItem">
            <ImageGalleryItem url={previewURL}/>
        </li>
        ))}
    </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        previewURL: PropTypes.string.isRequired
    })).isRequired
}

export default ImageGallery;