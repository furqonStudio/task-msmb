import Svg, { Path } from 'react-native-svg'

const LocationIcon = ({ width = 6, height = 9, color = '#8B5A2B' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 6 9" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.63133 8.33741C2.63133 8.33741 5.26265 5.90262 5.26265 3.45066C5.26265 1.75909 4.08457 0.819336 2.63133 0.819336C1.17808 0.819336 0 1.75051 0 3.45066C0 5.90262 2.63133 8.33741 2.63133 8.33741ZM3.75913 3.45053C3.75913 2.82772 3.25424 2.32282 2.63142 2.32282C2.0086 2.32282 1.50371 2.82772 1.50371 3.45053C1.50371 4.07335 2.0086 4.57824 2.63142 4.57824C3.25424 4.57824 3.75913 4.07335 3.75913 3.45053Z"
        fill={color}
      />
    </Svg>
  )
}

export default LocationIcon
