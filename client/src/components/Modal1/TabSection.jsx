import React from 'react';
import * as Styled from '../../../dist/styles.js';

const TabSection = () => {
  return (
    <Styled.Tabs>
      <Styled.PhotosTab>Photos</Styled.PhotosTab>
      <Styled.OtherTab>Map</Styled.OtherTab>
      <Styled.OtherTab>Street View</Styled.OtherTab>
      <Styled.OtherTab>Schools</Styled.OtherTab>
      <Styled.OtherTab>Crime</Styled.OtherTab>
      <Styled.OtherTab>Commute</Styled.OtherTab>
      <Styled.OtherTab>Shop & Eat</Styled.OtherTab>
    </Styled.Tabs>
  )
}

export default TabSection;