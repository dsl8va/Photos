import React from 'react';
import * as Styled from '../../../dist/styles.js';

const TabSection = () => {
  return (
    <Styled.Tabs>
      <Styled.PhotosTab>Photos</Styled.PhotosTab>
      <Styled.MapTab>Map</Styled.MapTab>
      <Styled.StreetViewTab>Street View</Styled.StreetViewTab>
      <Styled.SchoolsTab>Schools</Styled.SchoolsTab>
      <Styled.CrimeTab>Crime</Styled.CrimeTab>
      <Styled.CommuteTab>Commute</Styled.CommuteTab>
      <Styled.ShopEatTab>Shop & Eat</Styled.ShopEatTab>
    </Styled.Tabs>
  )
}

export default TabSection;