import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {FiHeart, FiShare} from 'react-icons/fi'
import {FaRegImage} from 'react-icons/fa'
import {Container, Grid, ForSale, ButtonsLayout, Save, Share, NumberOfPhotos, Image1Style, Image2Style, Image3Style, HeartStyle} from '../../dist/styles.js';

// ********** Style Components with Props ********** //
const Image1 = styled.div`${Image1Style}`;
const Image2 = styled.div`${Image2Style}`;
const Image3 = styled.div`${Image3Style}`;

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
    <Container>

      <Grid>
        <Image1 photo={listing.photos ? listing.photos[0] : null}>
        </Image1>
        <Image2 photo={listing.photos ? listing.photos[2] : null}>
        </Image2>
        <Image3 photo={listing.photos ? listing.photos[listing.photos.length -1] : null}>
        </Image3>
      </Grid>

      <ForSale>FOR SALE</ForSale>
      <ButtonsLayout>
        <Save><FiHeart className="icon"/>Save</Save>
        <Share><FiShare className="icon"/>Share</Share>
      </ButtonsLayout>
      <NumberOfPhotos><FaRegImage className="image-icon"/>{listing.photos ? listing.photos.length :null}</NumberOfPhotos>

    </Container>
  )
}

export default App;