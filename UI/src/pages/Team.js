// @flow
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import team from '../assets/team.jpeg'

import UserContext from '../context/UserContext'

class About extends Component<Props, State> {
  // eslint-disable-next-line react/sort-comp
  static contextType = UserContext

  render() {
    var divider = 2
    // var Wheight = 12
    var width = 1656
    var height = 1242
    return (
      <div>
        <img
          src={team}
          alt="team"
          width={width / divider}
          height={height / divider}
        />
      </div>
    )
  }
}

export default withRouter(About)
