// @flow
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import lesson from '../assets/Group 17.png'

import UserContext from '../context/UserContext'

class LessonPlan extends Component<Props, State> {
  // eslint-disable-next-line react/sort-comp
  static contextType = UserContext

  render() {
    var divider = 4
    // var Wheight = 12
    var width = 5120
    var height = 9028
    return (
      <div>
        <img
          src={lesson}
          alt="Battery Leaderboard"
          width={width / divider}
          height={height / divider}
        />
      </div>
    )
  }
}

export default withRouter(LessonPlan)
