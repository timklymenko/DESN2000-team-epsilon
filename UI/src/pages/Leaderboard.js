// @flow
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import LiveBoard from '../components/LiveBoard'

class Profile extends Component<Props, State> {
  // eslint-disable-next-line react/sort-comp
  // static contextType = UserContext
  constructor(props: Props) {
    super(props)
    this.state = {
      id: 0,
      current: 0,
      voltage: 0,
    }
  }

  fetchData(that) {
    const url = 'http://localhost:3000/data'
    fetch(url)
      .then((response) => response.json())
      .then((contents) => {
        var tmp = contents[0].split('-')
        const id = tmp[0]
        tmp = tmp[1].split(',')
        that.setState({ id: id, current: tmp[0], voltage: tmp[1] })
      })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.fetchData(this)
    }, 500)
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Battery Colosseum!</h1>
        <br />
        <br />
        <p style={{ fontSize: '20px' }}>
          Here we battle to see who can charge their battery the fastest. Make
          sure you remember the theory you were taught to maximise your
          generator's power! Let the games begin!
        </p>
        <br />
        <LiveBoard
          id={this.state.id}
          current={this.state.current}
          // current={0.01}
          voltage={this.state.voltage}
        />
      </div>
    )
  }
}

export default withRouter(Profile)
