import React, {useState} from 'react';
import {FiHeart, FiShare} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import * as Styled from '../styles/styles.js';
import {rightArrow, leftArrow} from '../utils/SVG.jsx';
import s from '../styles/styles.css';

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

          <Styled.ModalSave><FiHeart className={`${s.iconModal}`}/>Save</Styled.ModalSave>

          <Styled.ModalShare><FiShare className={`${s.iconModal}`}/>Share</Styled.ModalShare>

          <Styled.CloseButton2 onClick={onClose}><CgClose className={`${s.closeButton}`}/></Styled.CloseButton2>
        </Styled.Modal2Buttons>

        <Styled.ImageSelected photo={selectedImg}></Styled.ImageSelected>

        <Styled.NextButton onClick={handleNextClick}>{rightArrow}</Styled.NextButton>
        <Styled.PrevButton onClick={handlePrevClick}>{leftArrow}</Styled.PrevButton>

        <Styled.pageCountContainer>
          {`${listing.photos.indexOf(selectedImg) + 1} of ${listing.photos.length}`}
        </Styled.pageCountContainer>

      </Styled.ImageDisplay>

    </>

  )
}

export default ImageCarousel;