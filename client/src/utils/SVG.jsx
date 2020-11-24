import React from 'react';
import s from '../styles/styles.css'

// ********** NavBar Icons ********** //

export const searchIcon = (<svg className={`${s.searchIcon}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M20.756 18.876l6.155 6.154-1.88 1.881-6.155-6.155A9.269 9.269 0 0 1 13.3 22.61a9.31 9.31 0 1 1 9.31-9.31c0 2.091-.69 4.021-1.854 5.576zM13.3 19.95a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3z" fill="white"></path></svg>);

// ********** 1st Modal Icons ********** //

export const tourTypeIcon = (<svg className={`${s.iconTourtype}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.96 27.93c-6.61 0-11.97-5.36-11.97-11.97S9.35 3.99 15.96 3.99s11.97 5.36 11.97 11.97-5.36 11.97-11.97 11.97zm0-2.66a9.31 9.31 0 1 0 0-18.62 9.31 9.31 0 0 0 0 18.62zm-1.33-4.51h2.66v2.66h-2.66v-2.66zm2.66-2.16h-2.66v-3.97h1.33a1.664 1.664 0 0 0 0-3.325c-.465 0-.897.19-1.21.523l-.912.968-1.936-1.824.912-.968a4.324 4.324 0 1 1 4.476 7.077V18.6z" fill="#869099"></path></svg>);

export const checkMark = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <g>
      <rect data-cb-part="blur" strokeWidth="2" width="18" height="18" x="3" y="3" rx="4" />
      <rect id="finSvgSqr" data-cb-part="background" strokeWidth="2" width="18" height="18" x="3" y="3" rx="4" />
      <path data-cb-part="check" fill="none" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13l2.5 2L15 9" />
    </g>
  </svg>
);

// ********** 2nd Modal Icons ********** //

export const rightArrow = (<svg className={`${s.nextPrevButton}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" fill="white"></path></svg>)

export const leftArrow = (<svg className={`${s.nextPrevButton}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" fill="white"></path></svg>)