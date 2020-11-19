import React, {useState} from 'react';
import {FiHeart, FiShare} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import {FcNext, FcPrevious} from 'react-icons/fc'
import * as Styled from '../../dist/styles.js';

const ImageCarousel = ({selectedImg, onClose, listing, setSelectedImg}) => {
  if (!selectedImg) return null

  var handleNextClick = () => {
    var nextImgIndex = listing.photos.lastIndexOf(selectedImg);

    nextImgIndex === (listing.photos.length - 1) ? setSelectedImg(listing.photos[0]) : setSelectedImg(listing.photos[nextImgIndex + 1]);
  }

  var handlePrevClick = () => {
    var nextImgIndex = listing.photos.lastIndexOf(selectedImg);

    nextImgIndex === 0 ? setSelectedImg(listing.photos[listing.photos.length - 1]) : setSelectedImg(listing.photos[nextImgIndex - 1]);
  }

  return (
    <>
      <Styled.ImageDisplay>

        <Styled.CarouselHouseInfo>
        {`${listing.address} | $${listing.price} | ${listing.beds} Beds ${listing.baths} Baths`}
        </Styled.CarouselHouseInfo>

        <Styled.Modal2Buttons>
          <Styled.TourButton>Schedule a Tour</Styled.TourButton>

          <Styled.ModalSave><FiHeart className="icon-modal"/>Save</Styled.ModalSave>

          <Styled.ModalShare><FiShare className="icon-modal"/>Share</Styled.ModalShare>

          <Styled.CloseButton2 onClick={onClose}><CgClose className="close-button"/></Styled.CloseButton2>
        </Styled.Modal2Buttons>

        <Styled.ImageSelected photo={selectedImg}></Styled.ImageSelected>

        <Styled.NextButton onClick={handleNextClick}><FcNext className="next-prev-button"/></Styled.NextButton>
        <Styled.PrevButton onClick={handlePrevClick}><FcPrevious className="next-prev-button"/></Styled.PrevButton>

      </Styled.ImageDisplay>

    </>

  )
}

export default ImageCarousel;