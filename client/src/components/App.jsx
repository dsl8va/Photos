import React, {useState} from 'react';
import styled from 'styled-components';

// ********** Container ********** //

const Wrapper = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr;
  gap: 5px;
  width: 1000px;
  height: 500px;
  margin: 0 auto;
`;

// ********** Image 1 Photo ********** //

const Image1 = styled.div`
  border: 1px solid black;
  grid-row: 1 / 3;
  grid-column: 1 / 4;
`;

const ForSale = styled.span`
  border: 1px solid black;
  padding: 5px;
  margin: 10px;
  display: inline-block;
`;

// ********** Image 2 Photo ********** //

const Image2 = styled.div`
  border: 1px solid black;
  grid-row: 1;
  grid-column: 4;
`;

const ButtonsLayout = styled.div`
  text-align: center;
`;

const Save = styled.div`
  border: 1px solid black;
  padding: 10px 25px;
  margin: 10px;
  display: inline-block;
`;

const Share = styled.div`
  border: 1px solid black;
  padding: 10px 25px;
  margin: 10px;
  display: inline-block;
`;

// ********** Image 3 Photo ********** //

const Image3 = styled.div`
  border: 1px solid black;
  grid-row: 2;
  grid-column: 4;
  position: relative;
`;

const NumberOfPhotos = styled.div`
  border: 1px solid black;
  padding: 3px;
  margin: 5px;
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
`;

// ********** App Component ********** //

const App = () => {
  const [photos, setPhotos] = useState([]);

  return (
    <Wrapper>
      <Image1>
        <ForSale>For Sale</ForSale>
        Image 1
      </Image1>
      <Image2>
        <ButtonsLayout>
          <Save>Save</Save>
          <Share>Share</Share>
        </ButtonsLayout>
        Image 2
      </Image2>
      <Image3>
        Image 3
        <NumberOfPhotos>25</NumberOfPhotos>
      </Image3>
    </Wrapper>
  )
}

export default App;