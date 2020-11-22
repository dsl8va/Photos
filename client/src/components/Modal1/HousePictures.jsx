import React from 'react';
import * as Styled from '../../styles/styles.js';

const HousePicturesSection = (props) => {


  return (
    <Styled.HousePictures>
      <Styled.HouseImage1 onClick={() => props.setSelectedImg(props.photos[0])} photo={props.photos[0]}></Styled.HouseImage1>
      <Styled.HouseImage2 onClick={() => props.setSelectedImg(props.photos[1])} photo={props.photos[1]}></Styled.HouseImage2>
      <Styled.HouseImage3 onClick={() => props.setSelectedImg(props.photos[2])} photo={props.photos[2]}></Styled.HouseImage3>
      <Styled.HouseImage4 onClick={() => props.setSelectedImg(props.photos[3])} photo={props.photos[3]}></Styled.HouseImage4>
      <Styled.HouseImage5 onClick={() => props.setSelectedImg(props.photos[4])} photo={props.photos[4]}></Styled.HouseImage5>
      <Styled.HouseImage6 onClick={() => props.setSelectedImg(props.photos[5])} photo={props.photos[5]}></Styled.HouseImage6>
      <Styled.HouseImage7 onClick={() => props.setSelectedImg(props.photos[6])} photo={props.photos[6]}></Styled.HouseImage7>
      <Styled.HouseImage8 onClick={() => props.setSelectedImg(props.photos[7])} photo={props.photos[7]}></Styled.HouseImage8>
      <Styled.HouseImage9 onClick={() => props.setSelectedImg(props.photos[8])} photo={props.photos[8]}></Styled.HouseImage9>
      <Styled.HouseImage10 onClick={() => props.setSelectedImg(props.photos[9])} photo={props.photos[9]}></Styled.HouseImage10>
    </Styled.HousePictures>
  )
}

export default HousePicturesSection;