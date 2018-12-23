import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard'
import 'core-js/es6/map';

const ImageList = props => {
   const images = props.images.map((image) =>  {
   return <ImageCard key={image.id} image= {image}  />
   }) ;
    return <div className="image-List">{images}</div>
};

export default ImageList;