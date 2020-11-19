import React, {useState} from 'react';
import {FiHeart, FiShare} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import {Overlay, ImageDisplay, ImageSelected, CarouselHouseInfo, ModalSave, ModalShare, CloseButton2, TourButton, Modal2Buttons} from '../../dist/styles.js';

const ImageCarousel = ({selectedImg, onClose, listing}) => {
  if (!selectedImg) return null

  return (
    <>
      <ImageDisplay>

        <CarouselHouseInfo>
        {`${listing.address} | $${listing.price} | ${listing.beds} Beds ${listing.baths} Baths`}
        </CarouselHouseInfo>

        <Modal2Buttons>
          <TourButton>Schedule a Tour</TourButton>

          <ModalSave><FiHeart className="icon-modal"/>Save</ModalSave>

          <ModalShare><FiShare className="icon-modal"/>Share</ModalShare>

          <CloseButton2 onClick={onClose}><CgClose className="close-button"/></CloseButton2>
        </Modal2Buttons>

        <ImageSelected photo={selectedImg}></ImageSelected>

      </ImageDisplay>

    </>

  )
}

export default ImageCarousel;