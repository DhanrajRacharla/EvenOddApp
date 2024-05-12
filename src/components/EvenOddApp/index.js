// Write your code here

import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNum = () =>  Math.random() * 100
  

  onIncrement = () => {
    this.setState({count: Math.ceil(this.getRandomNum())})
  }
  render() {
    const {count} = this.state
    let numberIs = ''

    if (count % 2 === 0) {
      numberIs = 'Even'
    } else {
      numberIs = 'Odd'
    }
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Count {count}</h1>
          <p className="description">Count is {numberIs}</p>
          <div>
            <button type="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}



export default EvenOddApp
