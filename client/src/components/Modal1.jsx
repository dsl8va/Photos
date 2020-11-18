import React from 'react';
import {FiHeart, FiShare} from 'react-icons/fi'
import {Modal1, Overlay, Tabs, Modal1ButtonsArea, HouseInfo, HousePictures, Tours, PhotosTab, MapTab, StreetViewTab, SchoolsTab, CrimeTab, CommuteTab, ShopEatTab, ModalSave, ModalShare, CloseButton} from '../../dist/styles.js'

const FirstModal = (props) => {
  if (!props.open) return null

  return (
    <>
      <Overlay/>
      <Modal1>

        <Tabs>
          <PhotosTab>Photos</PhotosTab>
          <MapTab>Map</MapTab>
          <StreetViewTab>Street View</StreetViewTab>
          <SchoolsTab>Schools</SchoolsTab>
          <CrimeTab>Crime</CrimeTab>
          <CommuteTab>Commute</CommuteTab>
          <ShopEatTab>Shop & Eat</ShopEatTab>
        </Tabs>

        <Modal1ButtonsArea>
          <ModalSave><FiHeart className="icon"/>Save</ModalSave>
          <ModalShare><FiShare className="icon"/>Share</ModalShare>
          <CloseButton onClick={props.onClose}>X</CloseButton>
        </Modal1ButtonsArea>

        <HouseInfo>
          {`${props.listing.address} | $${props.listing.price} | ${props.listing.beds} Beds ${props.listing.baths} Baths`}
        </HouseInfo>
        <HousePictures></HousePictures>
        <Tours></Tours>
      </Modal1>
    </>
  )
}

export default FirstModal;