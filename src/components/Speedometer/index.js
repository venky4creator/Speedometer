// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }
  onClickApplyBrakeButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerationButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedometr-app-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="speedometer-image"
            alt="speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          />

          <h1 className="speed-text">Speed is {speed}mph</h1>
          <p className="speed-limits">Min limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="accelerate-button button "
              type="button"
              onClick={this.onClickAccelerationButton}
            >
              Accelerate
            </button>
            <button
              className="apply-brake-button button"
              type="button"
              onClick={this.onClickApplyBrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
