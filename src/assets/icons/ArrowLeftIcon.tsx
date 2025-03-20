import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ArrowLeftIcon = ({ width = 28, height = 28, color = '#2B2B2B' }) => (
  <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
    <Path
      d="M4.95834 14.32L22.4583 14.32"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.0164 21.3485L4.95811 14.3205L12.0164 7.29131"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ArrowLeftIcon
