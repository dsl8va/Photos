import React from 'react';
import * as Styled from '../../../dist/styles.js';

const TourDates = ({date}) => {
  return (
    <Styled.CalendarDate>
      <Styled.CalendarDayOfWeek>{date.dayOfWeek}</Styled.CalendarDayOfWeek>
      <Styled.CalendarDayOfMonth>{date.dayOfMonth}</Styled.CalendarDayOfMonth>
      <Styled.CalendarMonth>{date.month}</Styled.CalendarMonth>
    </Styled.CalendarDate>
  )
}

export default TourDates;