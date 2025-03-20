import React from 'react'
import Svg, { Path } from 'react-native-svg'

const PaddyIcon = ({ width = 8, height = 6, color = '#8B5A2B' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 8 6" fill="none">
      <Path
        d="M1.69541 2.93084C2.47227 3.64782 3.47958 3.76304 3.95706 3.77361V5.03148H4.46021V3.77059C4.9377 3.76002 5.9455 3.64581 6.72488 2.93033C7.39155 2.318 7.72966 1.41686 7.72966 0.251574V0H7.47809C5.87808 0 4.7616 0.724533 4.20763 2.10718C3.65316 0.741137 2.52309 0 0.954278 0H0.703711L0.702704 0.250568C0.69717 1.41586 1.03126 2.3175 1.69541 2.93084ZM7.21998 0.510695C7.1757 1.40076 6.89595 2.08857 6.38777 2.557C5.74022 3.15373 4.86877 3.25436 4.46021 3.26643V3.01889V3.00379C4.80487 1.43347 5.73317 0.595727 7.22048 0.510191L7.21998 0.510695ZM3.95656 3.00429V3.26945C3.5475 3.25687 2.67756 3.15524 2.03353 2.558C1.52736 2.08907 1.25114 1.40127 1.21088 0.510695C2.69265 0.595727 3.61593 1.43347 3.95656 3.00429Z"
        fill={color}
      />
    </Svg>
  )
}

export default PaddyIcon
