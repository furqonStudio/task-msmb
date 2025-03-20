import React from 'react'
import Svg, { Path } from 'react-native-svg'

const RoundedLocationIcon = ({ width = 9, height = 9, color = '#8B5A2B' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 9 9" fill="none">
      <Path
        d="M4.21622 4.71862C4.82164 4.71862 5.31243 4.22782 5.31243 3.6224C5.31243 3.01698 4.82164 2.52618 4.21622 2.52618C3.6108 2.52618 3.12 3.01698 3.12 3.6224C3.12 4.22782 3.6108 4.71862 4.21622 4.71862Z"
        stroke={color}
        strokeWidth={0.527027}
      />
      <Path
        d="M1.2719 2.98297C1.96406 -0.0597338 6.4719 -0.0562202 7.16054 2.98648C7.5646 4.77135 6.45433 6.28216 5.48109 7.21675C4.77487 7.89837 3.65757 7.89837 2.94784 7.21675C1.97811 6.28216 0.867842 4.76783 1.2719 2.98297Z"
        stroke={color}
        strokeWidth={0.527027}
      />
    </Svg>
  )
}

export default RoundedLocationIcon
