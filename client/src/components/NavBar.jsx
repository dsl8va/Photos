import React from 'react';
import * as Styled from '../styles/styles.js';
import s from '../styles/styles.css';
import {searchIcon, mainMenu} from '../utils/SVG.jsx';

const NavBar = () => {
  return (
    <Styled.NavBar>

      <Styled.LeftSideNavContainer>
        <Styled.Logo></Styled.Logo>
          <Styled.SearchHouses placeholder="Search for City, Neighborhood, Zip, County, ..."></Styled.SearchHouses>
          <Styled.SearchHousesButton>{searchIcon}</Styled.SearchHousesButton>

        <Styled.BuyDropDown>Buy</Styled.BuyDropDown>
        <Styled.RentDropDown>Rent</Styled.RentDropDown>
        <Styled.MortgageDropDown>Mortage</Styled.MortgageDropDown>
      </Styled.LeftSideNavContainer>

      <Styled.RightSideNavContainer>
        <Styled.SavedHomes>Saved Homes</Styled.SavedHomes>
        <Styled.SavedSearches>Saved Searches</Styled.SavedSearches>
        <Styled.SignUpOrLogin>Sign up or Log in</Styled.SignUpOrLogin>
        <Styled.MainMenu>{mainMenu}</Styled.MainMenu>
      </Styled.RightSideNavContainer>

    </Styled.NavBar>
  )
}

export default NavBar;