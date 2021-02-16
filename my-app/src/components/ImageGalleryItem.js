import React from 'react';

const ImageGalleryItem = ({url})=>(
    <div>
        <img src={url} alt="" className="ImageGalleryItem-image"/>
    </div>
); 
       
export default ImageGalleryItem;