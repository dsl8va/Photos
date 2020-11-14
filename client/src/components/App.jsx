import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template: 1 fr 1 fr / 2fr 1fr;
  gap: 5px;
  width: 750px;
  height: 250px;
  margin: 0 auto;
`;

const Image1 = styled.div`
  border: 1px solid black;
  grid-row: 1 / 3;
  grid-column: 1
`;

const Image2 = styled.div`
  border: 1px solid black;
  grid-row: 1;
  grid-column: 2
`;

const Image3 = styled.div`
  border: 1px solid black;
  grid-row: 2;
  grid-column: 2;
`;

const App = () => {
  const [photos, setPhotos] = useState([]);

  return (
    <Wrapper>
      <Image1>
        <div>For Sale</div>
        Image 1
      </Image1>
      <Image2>
        <div>Save</div>
        <div>Share</div>
        Image 2
      </Image2>
      <Image3>
        <div>25</div>
        Image 3
      </Image3>
    </Wrapper>
  )
}

export default App;