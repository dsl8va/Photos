import React, {useState} from 'react';
import {FiHeart, FiShare} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import TabSection from './Modal1/TabSection.jsx';
import HousePicturesSection from './Modal1/HousePictures.jsx';
import TourSection from './Modal1/Tours.jsx';
import ImageCarousel from './Modal2.jsx';
import * as Styled from '../../dist/styles.js';

const FirstModal = (props) => {
  const [selectedImg, setSelectedImg] = useState(null);

  if (!props.open) return null

  return (
    <>
      <Styled.Overlay/>

      <Styled.Modal1>

        <TabSection/>

        <Styled.Modal1ButtonsArea>
          <Styled.ModalSave><FiHeart className="icon-modal"/>Save</Styled.ModalSave>
          <Styled.ModalShare><FiShare className="icon-modal"/>Share</Styled.ModalShare>
          <Styled.CloseButton onClick={props.onClose}><CgClose className="close-button"/></Styled.CloseButton>
        </Styled.Modal1ButtonsArea>

        <Styled.HouseInfoArea>
          <Styled.HouseInfo>{`${props.listing.address} | $${props.listing.price.toLocaleString('en')} | ${props.listing.beds} Beds ${props.listing.baths} Baths`}</Styled.HouseInfo>
        </Styled.HouseInfoArea>

        <HousePicturesSection photos={props.listing.photos} setSelectedImg={setSelectedImg}/>

        <TourSection />

      </Styled.Modal1>

      <ImageCarousel selectedImg={selectedImg} onClose={() => setSelectedImg(false)} listing={props.listing} setSelectedImg={setSelectedImg}/>

    </>
  )
}

export default FirstModal;