import React from 'react';
import {FiHeart, FiShare} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import {Modal1, Overlay, Tabs, Modal1ButtonsArea, HouseInfoArea, HousePictures, Tours, PhotosTab, MapTab, StreetViewTab, SchoolsTab, CrimeTab, CommuteTab, ShopEatTab, ModalSave, ModalShare, CloseButton, HouseImage1, HouseImage2, HouseImage3, HouseImage4, HouseImage5, HouseImage6, HouseImage7, HouseImage8, HouseImage9, HouseImage10, TourContainer, TourHeader, HouseInfo} from '../../dist/styles.js';

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
          <ModalSave><FiHeart className="icon-modal"/>Save</ModalSave>
          <ModalShare><FiShare className="icon-modal"/>Share</ModalShare>
          <CloseButton onClick={props.onClose}><CgClose className="close-button"/></CloseButton>
        </Modal1ButtonsArea>

        <HouseInfoArea>
          <HouseInfo>{`${props.listing.address} | $${props.listing.price} | ${props.listing.beds} Beds ${props.listing.baths} Baths`}</HouseInfo>
        </HouseInfoArea>

        <HousePictures>
          <HouseImage1 photo={props.listing.photos[0]}></HouseImage1>
          <HouseImage2 photo={props.listing.photos[1]}></HouseImage2>
          <HouseImage3 photo={props.listing.photos[2]}></HouseImage3>
          <HouseImage4 photo={props.listing.photos[3]}></HouseImage4>
          <HouseImage5 photo={props.listing.photos[4]}></HouseImage5>
          <HouseImage6 photo={props.listing.photos[5]}></HouseImage6>
          <HouseImage7 photo={props.listing.photos[6]}></HouseImage7>
          <HouseImage8 photo={props.listing.photos[7]}></HouseImage8>
          <HouseImage9 photo={props.listing.photos[8]}></HouseImage9>
          <HouseImage10 photo={props.listing.photos[9]}></HouseImage10>
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