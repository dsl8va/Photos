import React, {useState} from 'react';
import {FiHeart, FiShare} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import {Modal1, Overlay, Modal1ButtonsArea, HouseInfoArea, ModalSave, ModalShare, CloseButton, HouseInfo} from '../../dist/styles.js';
import TabSection from './Modal1/TabSection.jsx';
import HousePicturesSection from './Modal1/HousePictures.jsx';
import TourSection from './Modal1/Tours.jsx';
import ImageCarousel from './Modal2.jsx';

const FirstModal = (props) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [photoId, setPhotoId] = useState(null);

  if (!props.open) return null

  return (
    <>
      <Overlay/>

      <Modal1>

        <TabSection/>

        <Modal1ButtonsArea>
          <ModalSave><FiHeart className="icon-modal"/>Save</ModalSave>
          <ModalShare><FiShare className="icon-modal"/>Share</ModalShare>
          <CloseButton onClick={props.onClose}><CgClose className="close-button"/></CloseButton>
        </Modal1ButtonsArea>

        <HouseInfoArea>
          <HouseInfo>{`${props.listing.address} | $${props.listing.price} | ${props.listing.beds} Beds ${props.listing.baths} Baths`}</HouseInfo>
        </HouseInfoArea>

        <HousePicturesSection photos={props.listing.photos} setSelectedImg={setSelectedImg}/>

        <TourSection />

      </Modal1>

      <ImageCarousel selectedImg={selectedImg} onClose={() => setSelectedImg(false)} listing={props.listing} setSelectedImg={setSelectedImg}/>

    </>
  )
}

export default FirstModal;