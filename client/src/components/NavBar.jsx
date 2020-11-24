import React from 'react';
import * as Styled from '../styles/styles.js';

const NavBar = () => {
  return (
    <Styled.NavBar>

      <Styled.LeftSideNavContainer>
        <Styled.Logo></Styled.Logo>
        <Styled.SearchHouses placeholder="Search"></Styled.SearchHouses>
        <Styled.SearchHousesButton>O</Styled.SearchHousesButton>
        <Styled.BuyDropDown>Buy</Styled.BuyDropDown>
        <Styled.RentDropDown>Rent</Styled.RentDropDown>
        <Styled.MortgageDropDown>Mortage</Styled.MortgageDropDown>
      </Styled.LeftSideNavContainer>

      <Styled.RightSideNavContainer>
        <Styled.SavedHomes>Saved Homes</Styled.SavedHomes>
        <Styled.SavedSearches>Saved Searches</Styled.SavedSearches>
        <Styled.SignUpOrLogin>Sign up or Log in</Styled.SignUpOrLogin>
        <Styled.MainMenu>III</Styled.MainMenu>
      </Styled.RightSideNavContainer>

    </Styled.NavBar>
  )
}

export default NavBar;