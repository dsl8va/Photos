import styled, {css} from 'styled-components';

// ********** Containers ********** //

export const Container = styled.div`
  overflow: hidden;
  width: 1000px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
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