// @flow
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Ivan from '../assets/Ivan.jpg'

import UserContext from '../context/UserContext'

class About extends Component<Props, State> {
  // eslint-disable-next-line react/sort-comp
  static contextType = UserContext
  render() {
    var divider = 0.1
    // var Wheight = 12
    var width = 115
    var height = 140
    return (
      <div>
        <img
          src={Ivan}
          alt="about"
          width={width / divider}
          height={height / divider}
        />
      </div>
    )
  }
}

export default withRouter(About)
