import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs>
      <style>
          @import url('https://fonts.googleapis.com/css?family=Calibri:400,400i,700,700i');
      </style>
    </defs>
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)">
        <text
          x="29%"
          y="48%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Calibri"
          fontSize="52"
          fill="currentColor">
          S
        </text>
        <text
          x="49%"
          y="48%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Calibri"
          fontSize="52"
          fill="currentColor">
          L
        </text>

      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
