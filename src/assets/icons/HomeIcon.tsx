import React from 'react'
import { Svg, Path } from 'react-native-svg'

const HomeIcon = ({ width = 20, height = 21, fill = '#FCFCFC' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 21" fill="none">
      <Path
        d="M18.04 4.91521L12.28 0.885214C10.71 -0.214786 8.3 -0.154786 6.79 1.01521L1.78 4.92521C0.78 5.70521 0 7.30521 0 8.56521V15.4652C0 18.0152 2.06 20.0952 4.61 20.0952H15.39C17.94 20.0952 20.01 18.0252 20.01 15.4752V8.69521C20.01 7.34521 19.14 5.68521 18.04 4.91521ZM10.75 16.0952C10.75 16.5052 10.41 16.8452 10 16.8452C9.59 16.8452 9.25 16.5052 9.25 16.0952V13.0952C9.25 12.6852 9.59 12.3452 10 12.3452C10.41 12.3452 10.75 12.6852 10.75 13.0952V16.0952Z"
        fill={fill}
      />
    </Svg>
  )
}

export default HomeIcon
