import {Component} from 'react'
import {MdClose} from 'react-icons/md'
import Popup from 'reactjs-popup'

import './App.css'
import GameResultView from './GameResultView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    activeGameId: '',
    score: 0,
    isShow: true,
    text: '',
    opponent: '',
    userChoice: '',
  }

  getResult = (choice, randomIcon) => {
    let value
    if (choice.id === randomIcon.id) {
      value = 'It is Draw'
    } else if (choice.id === 'ROCK') {
      if (randomIcon.id === 'PAPER') {
        value = 'YOU LOSE'
      } else {
        value = 'YOU WON'
      }
    } else if (choice.id === 'PAPER') {
      if (randomIcon.id === 'SCISSORS') {
        value = 'YOU LOSE'
      } else {
        value = 'YOU WON'
      }
    } else if (choice.id === 'SCISSORS') {
      if (randomIcon.id === 'ROCK') {
        value = 'YOU LOSE'
      } else {
        value = 'YOU WON'
      }
    }
    return value
  }

  onClickGame = id => {
    const {score} = this.state
    const choice = choicesList.find(eachData => eachData.id === id)
    const randomIcon =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResult(choice, randomIcon)

    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      activeGameId: id,
      score: newScore,
      isShow: false,
      text: result,
      opponent: randomIcon,
      userChoice: choice,
    })
  }

  playAgainButton = () => {
    this.setState({isShow: true})
  }

  render() {
    const {score, text, isShow, opponent, userChoice} = this.state

    return (
      <div className="main-container">
        <div className="score-container">
          <div>
            <h1 className="custom-heading">
              ROCK <br /> PAPER <br /> SCISSORS
            </h1>
          </div>
          <div className="score-card">
            <p className="score-heading">score</p>
            <p className="score">{score}</p>
          </div>
        </div>
        <GameResultView
          choicesList={choicesList}
          onClickGame={this.onClickGame}
          isShow={isShow}
          text={text}
          playAgainButton={this.playAgainButton}
          opponent={opponent}
          userChoice={userChoice}
        />
        <div className="rules-container">
          <div className="popup-container">
            <Popup
              modal
              trigger={
                <button type="button" className="trigger-button">
                  Rules
                </button>
              }
            >
              {close => (
                <>
                  <div className="rules-view-container">
                    <div className="close-button-container">
                      <button
                        type="button"
                        className="trigger-button close-button"
                        onClick={() => close()}
                      >
                        <MdClose />
                      </button>
                    </div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                      className="rules-image"
                    />
                  </div>
                </>
              )}
            </Popup>
          </div>
        </div>
      </div>
    )
  }
}

export default App
