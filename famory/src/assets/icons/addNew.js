import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const AddNew = props => (
  <Svg width="22px" height="22px" viewBox="0 0 22 22" {...props}>
    <G
      id="UI-Design"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <G
        id="Community---Main"
        transform="translate(-319.000000, -35.000000)"
        stroke="#FFFFFF"
      >
        <G id="AddNew" transform="translate(320.000000, 36.000000)">
          <Path
            d="M7.6916556,-3.10752092e-16 L12.3083444,3.10752092e-16 C14.9829006,-1.80555915e-16 15.9527593,0.278476833 16.9305371,0.801398111 C17.9083149,1.32431939 18.6756806,2.09168511 19.1986019,3.06946289 C19.7215232,4.04724067 20,5.01709938 20,7.6916556 L20,12.3083444 C20,14.9829006 19.7215232,15.9527593 19.1986019,16.9305371 C18.6756806,17.9083149 17.9083149,18.6756806 16.9305371,19.1986019 C15.9527593,19.7215232 14.9829006,20 12.3083444,20 L7.6916556,20 C5.01709938,20 4.04724067,19.7215232 3.06946289,19.1986019 C2.09168511,18.6756806 1.32431939,17.9083149 0.801398111,16.9305371 C0.278476833,15.9527593 1.2037061e-16,14.9829006 -2.07168062e-16,12.3083444 L2.07168062e-16,7.6916556 C-1.2037061e-16,5.01709938 0.278476833,4.04724067 0.801398111,3.06946289 C1.32431939,2.09168511 2.09168511,1.32431939 3.06946289,0.801398111 C4.04724067,0.278476833 5.01709938,1.80555915e-16 7.6916556,-3.10752092e-16 Z"
            id="Rectangle"
          />
          <Path d="M5,10 L15,10" id="Line" strokeLinecap="square" />
          <Path
            d="M5,10 L15,10"
            id="Line"
            strokeLinecap="square"
            transform="translate(10.000000, 10.000000) rotate(90.000000) translate(-10.000000, -10.000000) "
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default AddNew;
