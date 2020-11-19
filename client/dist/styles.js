import styled, {css} from 'styled-components';

// ******************** APP ******************** //

// ********** Containers ********** //

export const Container = styled.div`
  overflow: hidden;
  width: 1000px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  font-family: TruliaSansBold;
`;

export const Grid = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr;
  gap: 7px;
  width: 100%;
  height: 100%;
  transition: all .5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// ********** Buttons ********** //

export const ForSale = styled.span`
  padding: 3px 5px;
  margin: 10px;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  background: white;
  color: rgb(0, 178, 91);
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
`;

export const ButtonsLayout = styled.div`
  text-align: center;
  position: absolute:
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Save = styled.div`
  padding: 0px 15px 10px 15px;
  margin: 10px 7.5px 10px 10px;
  display: inline-block;
  background: white;
  border-radius: 5px;
  position: relative;
  font-weight: bold;

  &:hover {
    background: rgb(232, 233, 234);
  }
`;

export const Share = styled.div`
  padding: 0px 15px 10px 15px;
  margin: 10px 15px 10px 7.5px;
  display: inline-block;
  background: white;
  border-radius: 5px;
  position: relative;
  font-weight: bold;

  &:hover {
    background: rgb(232, 233, 234);
  }
`;

export const NumberOfPhotos = styled.div`
  padding: 0px 7px 7px 10px;
  margin: 10px;
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
  background: rgba(59, 65, 68, 0.8);
  color: white;
  font-size: 15px;
  border-radius: 5px;
  position: absolute;

  &:hover {
    background: rgba(134, 144, 153, 0.8);
  }
`;

// ********** Image 1 Photo ********** //

export const Image1Style = css`
  grid-row: 1 / 3;
  grid-column: 1 / 4;
  background-image: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

// ********** Image 2 Photo ********** //

export const Image2Style = css`
  grid-row: 1;
  grid-column: 4;
  background-image: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

// ********** Image 3 Photo ********** //

export const Image3Style = css`
  grid-row: 2;
  grid-column: 4;
  background-image: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

// ******************** FIRST MODAL ******************** //

// ********** Modal Structure and Overlay ********** //

export const Modal1 = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  height: 90%;
  width: 90%;
  zIndex: 999;
  border-radius: 10px;
  display: grid;
  grid-template: 60px 35px 1fr / 2fr 350px;
  font-family: TruliaSansBold;
  color: rgb(59, 65, 68);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
  zIndex: 999;
`;

// ********** Tabs ********** //

export const Tabs = styled.div`
  grid-row: 1;
  grid-column: 1;
  height: 60px;
  white-space: nowrap;s
  overflow-x: auto;
`;

export const PhotosTab = styled.div`
  border: 1px solid rgb(232, 233, 234);
  border-radius: 10px;
  padding: 10px 20px;
  margin-left: 10px;
  margin-right: 2px;
  display: inline-block;
  color: rgb(0, 120, 130);
`;

export const MapTab = styled.div`
  padding: 10px 20px;
  margin: 10px 2px;
  display: inline-block;
  border-radius: 10px;

  &:hover {
    background: rgb(232, 233, 234);
  }
`;

export const StreetViewTab = styled.div`
  padding: 10px 20px;
  margin: 2px;
  display: inline-block;
  border-radius: 10px;

  &:hover {
    background: rgb(232, 233, 234);
  }
`;

export const SchoolsTab = styled.div`
  padding: 10px 20px;
  margin: 2px;
  display: inline-block;
  border-radius: 10px;

  &:hover {
    background: rgb(232, 233, 234);
  }
`;

export const CrimeTab = styled.div`
  padding: 10px 20px;
  margin: 2px;
  display: inline-block;
  border-radius: 10px;

  &:hover {
    background: rgb(232, 233, 234);
  }
`;
export const CommuteTab = styled.div`
  padding: 10px 20px;
  margin: 2px;
  display: inline-block;
  border-radius: 10px;

  &:hover {
    background: rgb(232, 233, 234);
  }
`;

export const ShopEatTab = styled.div`
  padding: 10px 20px;
  margin: 2px;
  display: inline-block;
  border-radius: 10px;

  &:hover {
    background: rgb(232, 233, 234);
  }
`;

// ********** Top Right Button Area ********** //

export const Modal1ButtonsArea = styled.div`
  grid-row: 1;
  grid-column: 2;
  text-align: right;
`;

export const ModalSave = styled(Save)`
  border: 1px solid rgb(232, 233, 234);
`;

export const ModalShare = styled(Share)`
  border: 1px solid rgb(232, 233, 234);
`;

export const CloseButton = styled.div`
  padding: 5px;
  margin-right: 12px;
  display: inline-block;

  &:hover {
    color: rgb(0, 120, 130);
  }
`;

// ********** House Information ********** //

export const HouseInfoArea = styled.div`
  border-top: 1px solid rgb(232, 233, 234);
  grid-row: 2;
  grid-column: 1 / 3;
  `;

export const HouseInfo = styled.div`
  position: relative;
  top: 7px;
  left: 8px;
  font-size: 15px;
`;

// ********** Gallery of House Photos ********** //

export const HousePictures = styled.div`
  border-radius: 12px;
  margin: 0px 7px 7px 7px;
  grid-row: 3;
  grid-column: 1;
  display: grid;
  grid-template: 300px 200px 400px 200px 400px / repeat(6, 1fr);
  overflow-y: auto;
  gap: 7px;
`;

export const HouseImage1 = styled.div`
  grid-row: 1;
  grid-column: 1 / 4;
  background: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;

`;
export const HouseImage2 = styled.div`
  grid-row: 1;
  grid-column: 4 / 7;
  background: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const HouseImage3 = styled.div`
  grid-row: 2;
  grid-column: 1 / 3;
  background: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const HouseImage4 = styled.div`
  grid-row: 2;
  grid-column: 3 / 5;
  background: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const HouseImage5 = styled.div`
  grid-row: 2;
  grid-column: 5 / 7;
  background: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const HouseImage6 = styled.div`
  grid-row: 3;
  grid-column: 1 / 7;
  background: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const HouseImage7 = styled.div`
  grid-row: 4;
  grid-column: 1 / 3;
  background: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const HouseImage8 = styled.div`
  grid-row: 4;
  grid-column: 3 / 5;
  background: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const HouseImage9 = styled.div`
  grid-row: 4;
  grid-column: 5 / 7;
  background: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const HouseImage10 = styled.div`
  grid-row: 5;
  grid-column: 1 / 7;
  background: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

// ********** Schedule a Tour Area ********** //

export const Tours = styled.div`
  border: 1px solid rgb(232, 233, 234);
  border-radius: 10px;
  grid-row: 3;
  grid-column: 2;
  margin: 0px 10px;
  padding: 20px;
  box-shadow: rgba(59, 65, 68, 0.7) 0px 8px 20px -15px;
`;

export const TourHeader = styled.div`
  font-family: TruliaSansBold;
  font-size: 20px;
  `;

export const TourType = styled.div`
  color: rgb(134, 144, 153);
  padding-top: 15px;
  padding-bottom: 7.5px;
`;

export const InPerson = styled.button`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgb(0, 120, 130);
  padding: 7px 16px;
  border-color: transparent;
  font-family: TruliaSansBold;
  font-size: 15px;
  color: white;
  width: 50%;
`;

export const VideoChat = styled.button`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: white;
  padding: 8px 16px;
  border: 1px solid rgb(134, 144, 153);
  font-family: TruliaSansBold;
  font-size: 15px;
  color: rgb(59, 59, 59);
  width: 50%;
`;

// ******************** SECOND MODAL ******************** //

// ********** Schedule a Tour Area ********** //

export const ImageDisplay = styled.div`

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .7);
  height: 100%;
  width: 100%;
  zIndex: 1000;
  font-family: TruliaSansBold;
`;

export const CarouselHouseInfo = styled.div`
  color: white;
  margin: 23px;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 23px;
`;

export const Modal2Buttons = styled.div`
  text-align: right;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
`;

export const TourButton = styled.div`
  padding: 10px 15px;
  margin: 10px 7.5px 10px 10px;
  display: inline-block;
  background: rgb(217, 60, 35);
  color: white;
  border-radius: 5px;

  &:hover {
    background: white;
    color: rgb(217, 60, 35);
    border-color: rgb(217, 60, 35);
  }
`;

export const CloseButton2 = styled(CloseButton)`
  color: white;
`;

export const ImageSelected = styled.div`
  background: url(${props => props.photo});
  width: 800px;
  height: 500px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NextButton = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background: rgb(59, 65, 68);
  position: fixed;
  top: 50%;
  right: 150px;
  display: inline-block;
  transform: translate(-50%, -50%);
  color: white;

  &:hover {
    background: rgb(133, 133, 133);
  }
`;

export const PrevButton = styled(NextButton)`
  left: 200px;
`;

