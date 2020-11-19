import React, {useState} from 'react';
import {Overlay, ImageDisplay, ImageSelected} from '../../dist/styles.js';

const ImageCarousel = ({selectedImg, onClose, listing}) => {
  if (!selectedImg) return null

  return (
    <>
      <ImageDisplay>
        <div>
        {`${listing.address} | $${listing.price} | ${listing.beds} Beds ${listing.baths} Baths`}
        </div>
        <button onClick={onClose}>close button</button>
        <ImageSelected photo={selectedImg}></ImageSelected>
      </ImageDisplay>

    </>

  )
}

export default ImageCarousel;