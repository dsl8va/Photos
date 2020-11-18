import React from 'react';
import {FiHeart, FiShare} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import {Modal1, Overlay, Modal1ButtonsArea, HouseInfoArea, Tours, ModalSave, ModalShare, CloseButton, TourContainer, TourHeader, HouseInfo} from '../../dist/styles.js';
import TabSection from './Modal1/TabSection.jsx';
import HousePicturesSection from './Modal1/HousePictures.jsx';

const FirstModal = (props) => {
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

        <HousePicturesSection photos={props.listing.photos}/>

        <Tours>
          <TourContainer>
            <TourHeader>Schedule a Tour</TourHeader>
          </TourContainer>
        </Tours>

      </Modal1>

    </>
  )
}

export default FirstModal;