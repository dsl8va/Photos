import React, {useState} from 'react';
import * as Styled from '../../../dist/styles.js';
import {getDates} from '../../utils/Logic.js';
import TourDates from './TourDatesCarousel.jsx';
import {MdWarning} from 'react-icons/md'
import {caution} from '../../utils/SVG.jsx';

const TourSection = () => {
  const [financingCheck, setFinancingCheck] = useState(false);

  var dates = getDates();
  console.log('next4days array:', dates);



  return (
    <Styled.Tours>
      <Styled.ToursContainer>
        <Styled.TourHeader>Schedule a Tour</Styled.TourHeader>
        <Styled.TourType>Tour Type</Styled.TourType>
        <Styled.InPerson>In-Person</Styled.InPerson><Styled.VideoChat>Video Chat</Styled.VideoChat>

        <Styled.CalendarContainer>
          {dates.map((date, index) => <TourDates date={date} key={index}/>)}
        </Styled.CalendarContainer>

        <Styled.ChooseATime>
          <option>Choose a time</option>
          <option>12:30pm</option>
          <option>1:00pm</option>
          <option>1:30pm</option>
          <option>2:00pm</option>
          <option>2:30pm</option>
          <option>3:00pm</option>
        </Styled.ChooseATime>

        <Styled.NamePhoneContainer>
          <Styled.TourNameInput placeholder="Name"></Styled.TourNameInput>
          <Styled.TourPhoneInput placeholder="Phone"></Styled.TourPhoneInput>
        </Styled.NamePhoneContainer>

        <Styled.TourEmailInput placeholder="Email"></Styled.TourEmailInput>

        <Styled.FinancingCheckBoxContainer >
          <Styled.FinancingCheckBoxInput type="checkbox" onClick={() => setFinancingCheck(!financingCheck)}/>
          <Styled.FinancingCheckMessageContainer>
            <Styled.FinancingCheckMessage>{financingCheck ? 'A licensed lender will call you soon' : 'I want to talk about financing'}</Styled.FinancingCheckMessage>
          </Styled.FinancingCheckMessageContainer>
        </Styled.FinancingCheckBoxContainer>

        <Styled.ScheduleATourButton>Schedule a Tour</Styled.ScheduleATourButton>

        <Styled.PublicHealthContainer>
          <Styled.PublicHealthContainerText>Public Health Advisory</Styled.PublicHealthContainerText>
        </Styled.PublicHealthContainer>

      </Styled.ToursContainer>
    </Styled.Tours>
  )
}

export default TourSection;