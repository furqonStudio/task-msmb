import Svg, { Path } from 'react-native-svg'

const SortIcon = ({ width = 16, height = 15, color = '#A1A1A1' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 15" fill="none">
      <Path
        d="M6.60848 11.5774H1.35788"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.95041 3.50027H14.201"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.27192 3.4552C5.27192 2.37548 4.39012 1.49998 3.30263 1.49998C2.21514 1.49998 1.33334 2.37548 1.33334 3.4552C1.33334 4.53491 2.21514 5.41041 3.30263 5.41041C4.39012 5.41041 5.27192 4.53491 5.27192 3.4552Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6667 11.5448C14.6667 10.4651 13.7855 9.58958 12.6981 9.58958C11.6099 9.58958 10.7281 10.4651 10.7281 11.5448C10.7281 12.6245 11.6099 13.5 12.6981 13.5C13.7855 13.5 14.6667 12.6245 14.6667 11.5448Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SortIcon
