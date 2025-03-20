import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

const AnalyzeIcon = ({ width = 24, height = 25, color = '#FCFCFC' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <G>
        <Path
          d="M20.0001 11.0951C19.7555 9.33541 18.9391 7.70499 17.6768 6.45492C16.4144 5.20485 14.7761 4.40447 13.0141 4.17706C11.4406 3.9723 9.8416 4.23451 8.41589 4.9311C6.99018 5.62769 5.80063 6.72793 4.99512 8.09506"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4 13.0952C4.23142 14.7605 4.97527 16.3124 6.12841 17.5359C7.28155 18.7594 8.78683 19.5937 10.4355 19.9232C12.0841 20.2527 13.7945 20.061 15.3293 19.3747C16.8641 18.6885 18.1473 17.5416 19.001 16.0932"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19 17.0952C19.5523 17.0952 20 16.6475 20 16.0952C20 15.5429 19.5523 15.0952 19 15.0952C18.4477 15.0952 18 15.5429 18 16.0952C18 16.6475 18.4477 17.0952 19 17.0952Z"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5 9.09521C5.55228 9.09521 6 8.6475 6 8.09521C6 7.54293 5.55228 7.09521 5 7.09521C4.44772 7.09521 4 7.54293 4 8.09521C4 8.6475 4.44772 9.09521 5 9.09521Z"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 15.0952C13.6569 15.0952 15 13.7521 15 12.0952C15 10.4384 13.6569 9.09521 12 9.09521C10.3431 9.09521 9 10.4384 9 12.0952C9 13.7521 10.3431 15.0952 12 15.0952Z"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}

export default AnalyzeIcon
