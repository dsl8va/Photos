import React from 'react';
import {Tabs, PhotosTab, MapTab, StreetViewTab, SchoolsTab, CrimeTab, CommuteTab, ShopEatTab} from '../../../dist/styles.js';

const TabSection = () => {
  return (
    <Tabs>
      <PhotosTab>Photos</PhotosTab>
      <MapTab>Map</MapTab>
      <StreetViewTab>Street View</StreetViewTab>
      <SchoolsTab>Schools</SchoolsTab>
      <CrimeTab>Crime</CrimeTab>
      <CommuteTab>Commute</CommuteTab>
      <ShopEatTab>Shop & Eat</ShopEatTab>
    </Tabs>
  )
}

export default TabSection;