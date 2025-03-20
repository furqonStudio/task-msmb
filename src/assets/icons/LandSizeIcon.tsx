import React from 'react'
import Svg, { Path } from 'react-native-svg'

const LandSizeIcon = ({ width = 10, height = 10, color = '#8B5A2B' }) => (
  <Svg width={width} height={height} viewBox="0 0 10 10" fill="none">
    <Path
      d="M9.16667 7.22958V2.77042C9.6575 2.53542 10 2.03792 10 1.45833C10 0.654167 9.34583 0 8.54167 0C7.96208 0 7.46458 0.3425 7.22958 0.833333H2.77042C2.53542 0.3425 2.03792 0 1.45833 0C0.654167 0 0 0.654167 0 1.45833C0 2.03792 0.3425 2.53542 0.833333 2.77042V7.22958C0.3425 7.46458 0 7.96208 0 8.54167C0 9.34583 0.654167 10 1.45833 10C2.03792 10 2.53542 9.6575 2.77042 9.16667H7.22958C7.46458 9.6575 7.96208 10 8.54167 10C9.34583 10 10 9.34583 10 8.54167C10 7.96208 9.6575 7.46458 9.16667 7.22958ZM7.10458 8.33333H2.89542C2.80333 7.69708 2.3025 7.19667 1.66667 7.10458V2.89542C2.30292 2.80333 2.80333 2.3025 2.89542 1.66667H7.10417C7.19625 2.30292 7.69708 2.80333 8.33292 2.89542V7.10417C7.69667 7.19625 7.19625 7.69708 7.10417 8.33292L7.10458 8.33333ZM8.54167 0.833333C8.88625 0.833333 9.16667 1.11375 9.16667 1.45833C9.16667 1.80292 8.88625 2.08333 8.54167 2.08333C8.19708 2.08333 7.91667 1.80292 7.91667 1.45833C7.91667 1.11375 8.19708 0.833333 8.54167 0.833333ZM1.45833 0.833333C1.80292 0.833333 2.08333 1.11375 2.08333 1.45833C2.08333 1.80292 1.80292 2.08333 1.45833 2.08333C1.11375 2.08333 0.833333 1.80292 0.833333 1.45833C0.833333 1.11375 1.11375 0.833333 1.45833 0.833333ZM1.45833 9.16667C1.11375 9.16667 0.833333 8.88625 0.833333 8.54167C0.833333 8.19708 1.11375 7.91667 1.45833 7.91667C1.80292 7.91667 2.08333 8.19708 2.08333 8.54167C2.08333 8.88625 1.80292 9.16667 1.45833 9.16667ZM8.54167 9.16667C8.19708 9.16667 7.91667 8.88625 7.91667 8.54167C7.91667 8.19708 8.19708 7.91667 8.54167 7.91667C8.88625 7.91667 9.16667 8.19708 9.16667 8.54167C9.16667 8.88625 8.88625 9.16667 8.54167 9.16667Z"
      fill={color}
    />
  </Svg>
)

export default LandSizeIcon
