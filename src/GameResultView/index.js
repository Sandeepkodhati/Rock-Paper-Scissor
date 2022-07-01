import './index.css'

const GameResultView = props => {
  const {
    onClickGame,
    choicesList,
    isShow,
    text,
    playAgainButton,
    userChoice,
    opponent,
  } = props

  const onClickGameResult = game => {
    onClickGame(game)
  }

  const gameView = () => (
    <div className="game-card-container">
      <div className="game-view-container">
        <img
          src={userChoice.imageUrl}
          alt="your choice"
          className="game-result-image"
        />
        <img
          src={opponent.imageUrl}
          alt="opponent choice"
          className="game-result-image"
        />
      </div>
      <p className="text-heading">{text}</p>
      <button
        type="button"
        onClick={playAgainButton}
        className="play-again-button"
      >
        Play Again
      </button>
    </div>
  )

  return (
    <>
      {isShow && (
        <div className="game-card-container">
          <div>
            <button
              type="button"
              className="button"
              data-testid="rockButton"
              onClick={() => onClickGameResult(choicesList[0].id)}
            >
              <img
                src={choicesList[0].imageUrl}
                alt={choicesList[0].id}
                className="game-image"
              />
            </button>
            <button
              type="button"
              className="button"
              data-testid="scissorsButton"
              onClick={() => onClickGameResult(choicesList[1].id)}
            >
              <img
                src={choicesList[1].imageUrl}
                alt={choicesList[1].id}
                className="game-image"
              />
            </button>
          </div>
          <button
            type="button"
            className="button"
            data-testid="paperButton"
            onClick={() => onClickGameResult(choicesList[2].id)}
          >
            <img
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              className="game-image"
            />
          </button>
        </div>
      )}
      {isShow ? '' : gameView()}
    </>
  )
}

export default GameResultView
