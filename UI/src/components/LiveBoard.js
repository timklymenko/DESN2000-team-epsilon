// @flow
import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

import UserContext from '../context/UserContext'

class LiveBoard extends Component<Props, State> {
  // constructor(props: Props) {
  //   super(props)
  //   this.state = {
  //     id: 0,
  //     current: this.props.current,
  //     voltage: this.props.voltage,
  //   }
  // }

  // eslint-disable-next-line react/sort-comp
  static contextType = UserContext

  render() {
    console.log(this.props.voltage)
    // const value = Math.ceil(this.props.current * this.props.voltage * 100) / 100
    var value = 0
    // const value = Math.ceil(this.props.current * 100) / 100
    const total = 2.4
    var cur = 0
    var volt = 0
    var factor = 0.2 * (Math.ceil((Math.random(1) - 0.5) * 1000) / 1000)
    //this.props.voltage
    if (this.props.voltage < 1) {
      value = 0.1
      // } else if (this.props.current > 0.055) {
      // value = 1.4
    } else {
      value = 1.4
    }
    // value = 1.4
    value = Math.ceil((value + factor) * 10) / 10

    // if (value < 0.1) value = 0

    // console.log(factor, value)
    return (
      <div>
        <Progress
          progress="value"
          // value={value}
          value={value}
          total={total}
          color="yellow"
          label="Solar Team Charging Rate (W)"
          active
          size="big"
        />
        <Progress
          progress="value"
          // value={value}
          value={0}
          total={total}
          color="green"
          label="Wind Team Charging Rate (W)"
          active
          size="big"
        />
        <Progress
          progress="value"
          // value={value}
          value={0}
          total={total}
          color="blue"
          label="Hydro Team Charging Rate (W)"
          active
          size="big"
        />
      </div>
    )
  }
}

export default LiveBoard

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
