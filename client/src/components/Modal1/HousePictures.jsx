import React from 'react';
import {HousePictures, HouseImage1, HouseImage2, HouseImage3, HouseImage4, HouseImage5, HouseImage6, HouseImage7, HouseImage8, HouseImage9, HouseImage10} from '../../../dist/styles.js';

const HousePicturesSection = (props) => {
  return (
    <HousePictures>
      <HouseImage1 photo={props.photos[0]}></HouseImage1>
      <HouseImage2 photo={props.photos[1]}></HouseImage2>
      <HouseImage3 photo={props.photos[2]}></HouseImage3>
      <HouseImage4 photo={props.photos[3]}></HouseImage4>
      <HouseImage5 photo={props.photos[4]}></HouseImage5>
      <HouseImage6 photo={props.photos[5]}></HouseImage6>
      <HouseImage7 photo={props.photos[6]}></HouseImage7>
      <HouseImage8 photo={props.photos[7]}></HouseImage8>
      <HouseImage9 photo={props.photos[8]}></HouseImage9>
      <HouseImage10 photo={props.photos[9]}></HouseImage10>
    </HousePictures>
  )
}

export default HousePicturesSection;