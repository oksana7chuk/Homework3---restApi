import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css'

export default class  ImageGallery extends Component {
    galleryRef = createRef();

    componentDidUpdate(prevProps, prevState)
    render(){
        return(
            <ul ref={this.galleryRef} className={styles.ImageGallery}>
            {this.props.images.map(({id,webformatURL,largeImageURL})=>(
            <li key={id} className="ImageGalleryItem">
                <ImageGalleryItem smallUrl={webformatURL} modalUrl={largeImageURL}/>
            </li>
            ))}
        </ul>
        )
    }
};




