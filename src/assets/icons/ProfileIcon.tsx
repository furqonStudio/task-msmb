import React from 'react'
import { Svg, Path } from 'react-native-svg'

const ProfileIcon = ({ width = 22, height = 25, color = '#FCFCFC' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.10714 16.7619H16.8929C19.7135 16.7619 22 18.9507 22 21.6508V24.0952H0V21.6508C0 18.9507 2.28655 16.7619 5.10714 16.7619Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0C14.1822 0 16.7619 2.57969 16.7619 5.7619C16.7619 8.94412 14.1822 11.5238 11 11.5238C7.81779 11.5238 5.2381 8.94412 5.2381 5.7619C5.2381 2.57969 7.81779 0 11 0Z"
        fill={color}
      />
    </Svg>
  )
}

export default ProfileIcon
