import React from 'react'
import { Svg, Path } from 'react-native-svg'

const ClientsIcon = ({ width = 26, height = 24, stroke = '#FCFCFC' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 24" fill="none">
      <Path
        d="M9.40004 10.6952C12.051 10.6952 14.2 8.54618 14.2 5.89522C14.2 3.24425 12.051 1.09521 9.40004 1.09521C6.74907 1.09521 4.60004 3.24425 4.60004 5.89522C4.60004 8.54618 6.74907 10.6952 9.40004 10.6952Z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 22.6954V17.8954C1 16.5698 2.07452 15.4954 3.4 15.4954H15.4C16.7255 15.4954 17.8 16.5698 17.8 17.8954V22.6954"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8 1.09521C18.8325 1.35957 19.7476 1.96005 20.4011 2.80199C21.0546 3.64392 21.4093 4.67941 21.4093 5.74522C21.4093 6.81102 21.0546 7.84651 20.4011 8.68844C19.7476 9.53038 18.8325 10.1309 17.8 10.3952"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.4 15.4954H22.6C23.9255 15.4954 25 16.5698 25 17.8954V22.6954"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ClientsIcon
