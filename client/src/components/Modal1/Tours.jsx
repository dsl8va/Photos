import React from 'react';
import * as Styled from '../../../dist/styles.js';
import {getDates} from '../../utils/Logic.js';

const TourSection = (props) => {
  var dates = getDates();
  console.log('next4days array:', dates);



  return (
    <Styled.Tours>
      <Styled.TourHeader>Schedule a Tour</Styled.TourHeader>
      <Styled.TourType>Tour Type</Styled.TourType>
      <Styled.InPerson>In-Person</Styled.InPerson><Styled.VideoChat>Video Chat</Styled.VideoChat>


    </Styled.Tours>
  )
}

export default TourSection;