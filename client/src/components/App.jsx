import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

// ********** Container ********** //

const Wrapper = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr;
  gap: 5px;
  width: 1000px;
  height: 400px;
  margin: 0 auto;
`;

// ********** Image 1 Photo ********** //

const Image1 = styled.div`
  border: 1px solid black;
  grid-row: 1 / 3;
  grid-column: 1 / 4;
  background-image: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
  background-image: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
  background-image: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
  const [listing, setListing] = useState({});

  useEffect(() => {
    fetchListing()
  }, []);

  var fetchListing = (id = 1) => {
    axios.get(`/api/listings/${id}`)
      .then(newListing => {
        setListing(newListing.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <Wrapper>
      <Image1 photo={listing.photos ? listing.photos[0] : null}>
        <ForSale>For Sale</ForSale>
      </Image1>
      <Image2 photo={listing.photos ? listing.photos[2] : null}>
        <ButtonsLayout>
          <Save>Save</Save>
          <Share>Share</Share>
        </ButtonsLayout>
      </Image2>
      <Image3 photo={listing.photos ? listing.photos[listing.photos.length -1] : null}>
        <NumberOfPhotos>25</NumberOfPhotos>
      </Image3>
    </Wrapper>
  )
}

export default App;