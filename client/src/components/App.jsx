import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {FiHeart, FiShare} from 'react-icons/fi'
import {FaRegImage} from 'react-icons/fa'
import FirstModal from './Modal1.jsx';
import ImageCarousel from './Modal2.jsx';
import * as Styled from '../styles/styles.js';
import s from '../styles/styles.css';

// ********** Style Components with Props ********** //
const Image1 = styled.div`${Styled.Image1Style}`;
const Image2 = styled.div`${Styled.Image2Style}`;
const Image3 = styled.div`${Styled.Image3Style}`;

// ********** App Component ********** //

const App = () => {
  const [listing, setListing] = useState({});
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

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

  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && modal1IsOpen) {
      setModal1IsOpen(false);
      setSelectedImg(null);
    }
  }, [setModal1IsOpen, modal1IsOpen, setSelectedImg]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
    <Styled.Container>
      <Styled.Grid onClick={() => setModal1IsOpen(true)}>
        <Image1 photo={listing.photos ? listing.photos[0] : null}>
        </Image1>
        <Image2 photo={listing.photos ? listing.photos[2] : null}>
        </Image2>
        <Image3 photo={listing.photos ? listing.photos[listing.photos.length -1] : null}>
        </Image3>
      </Styled.Grid>

      <Styled.ForSale>FOR SALE</Styled.ForSale>

      <Styled.ButtonsLayout>
        <Styled.Save><FiHeart className={`${s.icon}`}/>Save</Styled.Save>
        <Styled.Share><FiShare className={`${s.icon}`}/>Share</Styled.Share>
      </Styled.ButtonsLayout>

      <Styled.NumberOfPhotos onClick={() => setModal1IsOpen(true)}><FaRegImage className={`${s.imageIcon}`}/>{listing.photos ? listing.photos.length :null}</Styled.NumberOfPhotos>

    </Styled.Container>

    <FirstModal open={modal1IsOpen} onClose={() => setModal1IsOpen(false)} listing={listing} setSelectedImg={setSelectedImg}/>

    <ImageCarousel selectedImg={selectedImg} onClose={() => setSelectedImg(false)} listing={listing} setSelectedImg={setSelectedImg}/>

    </>
  )
}

export default App;