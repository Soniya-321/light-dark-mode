// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {text: 'Light Mode', isDarkMode: true}
  changeMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
      text: prevState.text === 'Light Mode' ? 'Dark Mode' : 'Light Mode' 
    }))
  }

  render() {
    const {text, isDarkMode} = this.state
    return (
      <div className="container">
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
          <h1 className={isDarkMode ? 'heading' : 'heading-1'}>Click To Change Mode</h1>
          <button className={isDarkMode ? 'button' : 'button-1'} type="button" onClick={this.changeMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
