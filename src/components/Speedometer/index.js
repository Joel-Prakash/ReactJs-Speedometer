import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerating = () => {
    this.setState(presentSpeed => {
      if (presentSpeed.speed < 200) {
        this.setState(presentCount => ({speed: presentCount.speed + 10}))
      } else if (presentSpeed.speed === 200) {
        this.setState(presentCount => ({speed: presentCount.speed}))
      }
    })
  }

  onApplyingBreaks = () => {
    this.setState(presentSpeed => {
      if (presentSpeed.speed > 0) {
        this.setState(presentCount => ({speed: presentCount.speed - 10}))
      } else if (presentSpeed.speed === 0) {
        this.setState(presentCount => ({speed: presentCount.speed}))
      }
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="sub-heading">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons">
          <button
            type="button"
            className="accelerate"
            onClick={this.onAccelerating}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="break"
            onClick={this.onApplyingBreaks}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
