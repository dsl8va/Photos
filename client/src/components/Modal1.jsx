import React from 'react';
import {FiHeart, FiShare} from 'react-icons/fi'
import {Modal1, Overlay, Tabs, Modal1ButtonsArea, HouseInfo, HousePictures, Tours, PhotosTab, MapTab, StreetViewTab, SchoolsTab, CrimeTab, CommuteTab, ShopEatTab, ModalSave, ModalShare, CloseButton, HouseImage1, HouseImage2, HouseImage3, HouseImage4, HouseImage5, HouseImage6, HouseImage7, HouseImage8, HouseImage9, HouseImage10, TourContainer, TourHeader} from '../../dist/styles.js'

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

        <HousePictures>
          <HouseImage1></HouseImage1>
          <HouseImage2></HouseImage2>
          <HouseImage3></HouseImage3>
          <HouseImage4></HouseImage4>
          <HouseImage5></HouseImage5>
          <HouseImage6></HouseImage6>
          <HouseImage7></HouseImage7>
          <HouseImage8></HouseImage8>
          <HouseImage9></HouseImage9>
          <HouseImage10></HouseImage10>
        </HousePictures>

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