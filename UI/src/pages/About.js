// @flow
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import about from '../assets/acout.png'

import UserContext from '../context/UserContext'

class About extends Component<Props, State> {
  // eslint-disable-next-line react/sort-comp
  static contextType = UserContext
  render() {
    var divider = 2
    // var Wheight = 12
    var width = 2450
    var height = 1376
    return (
      <div>
        <img
          src={about}
          alt="about"
          width={width / divider}
          height={height / divider}
        />
      </div>
    )
  }
}

export default withRouter(About)
