import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width="24pt" height="24pt" viewBox="0 0 24 24" {...props}>
    <G id="surface1">
      <Path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: 'rgb(32.54902%,53.333333%,92.941176%)',
          fillOpacity: 1,
        }}
        d="M 24 12 C 24 18.628906 18.628906 24 12 24 C 5.371094 24 0 18.628906 0 12 C 0 5.371094 5.371094 0 12 0 C 18.628906 0 24 5.371094 24 12 Z M 24 12 "
      />
      <Path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: 'rgb(23.921569%,40.784314%,72.54902%)',
          fillOpacity: 1,
        }}
        d="M 8.933594 17.414062 L 15.105469 23.582031 C 20.214844 22.222656 24 17.566406 24 12 C 24 11.886719 24 11.773438 24 11.660156 L 19.15625 7.191406 Z M 8.933594 17.414062 "
      />
      <Path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: 'rgb(100%,100%,100%)',
          fillOpacity: 1,
        }}
        d="M 12.304688 14.6875 C 12.832031 15.21875 12.832031 16.125 12.304688 16.65625 L 11.203125 17.753906 C 10.675781 18.285156 9.765625 18.285156 9.238281 17.753906 L 4.429688 12.910156 C 3.898438 12.378906 3.898438 11.46875 4.429688 10.941406 L 5.527344 9.84375 C 6.058594 9.3125 6.964844 9.3125 7.496094 9.84375 Z M 12.304688 14.6875 "
      />
      <Path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: 'rgb(100%,100%,100%)',
          fillOpacity: 1,
        }}
        d="M 16.503906 6.320312 C 17.035156 5.792969 17.941406 5.792969 18.472656 6.320312 L 19.570312 7.417969 C 20.101562 7.949219 20.101562 8.859375 19.570312 9.386719 L 11.242188 17.679688 C 10.714844 18.207031 9.804688 18.207031 9.273438 17.679688 L 8.175781 16.582031 C 7.648438 16.050781 7.648438 15.140625 8.175781 14.613281 Z M 16.503906 6.320312 "
      />
    </G>
  </Svg>
)

export default SvgComponent;