import React, {useState} from 'react';
import {FiHeart, FiShare} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import {FcNext, FcPrevious} from 'react-icons/fc'
import {Overlay, ImageDisplay, ImageSelected, CarouselHouseInfo, ModalSave, ModalShare, CloseButton2, TourButton, Modal2Buttons, NextButton, PrevButton} from '../../dist/styles.js';

const ImageCarousel = ({selectedImg, onClose, listing, setSelectedImg}) => {
  if (!selectedImg) return null

  var handleNextClick = () => {
    console.log('clicked!')
    var nextImgIndex = listing.photos.lastIndexOf(selectedImg);
    console.log('current index is', nextImgIndex);
    setSelectedImg(listing.photos[nextImgIndex + 1]);
  }

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

        <NextButton onClick={handleNextClick}><FcNext className="next-prev-button"/></NextButton>
        <PrevButton><FcPrevious className="next-prev-button"/></PrevButton>

      </ImageDisplay>

    </>

  )
}

export default ImageCarousel;