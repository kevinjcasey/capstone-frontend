import { useEffect, useState } from 'react'
import axios from 'axios'

// REDUX
  // useSelector is allowing data to be extracted from the store
  // useDispatch (dispatch) allows dispatching actions and updating
import { useSelector, useDispatch } from 'react-redux'

// ROUTER
import { Link } from 'react-router-dom'

// BULMA
import 'bulma/css/bulma.min.css';

const GameStart = () => {
  // STATES
  const [menuOptions, setMenuOptions] = useState([])

  // USE SELECTOR / STATE HOOKS
  const questionCategory = useSelector((state) => state.menuOptions.category)
  const questionDifficulty = useSelector((state) => state.menuOptions.difficulty)
  const questionType = useSelector((state) => state.menuOptions.type)
  const questionNumber = useSelector((state) => state.menuOptions.number_of_questions)
  const questionIndex = useSelector((state) => state.index)

  // API CATEGORIES CALL
  const getTrivia = () => {
    axios.get('https://opentdb.com/api_category.php').then((res) => {
    setMenuOptions(res.data.trivia_categories)
    })
  }

  // DEFINING USE DISPATCH
  const dispatch = useDispatch()

  // SELECT FUNCTIONS
  // REFERENCE: https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
  const handleCategorySelect = (event) => {
    dispatch({
      type: "CHANGE_CATEGORY", // passing the action.type and values
      value: event.target.value // payload defining the type of action and updating it
    })
  }

  const handleDifficultySelect = (event) => {
    dispatch({
      type: "CHANGE_DIFFICULTY",
      value: event.target.value
    })
  }

  const handleTypeSelect = (event) => {
    dispatch({
      type: "CHANGE_TYPE",
      value: event.target.value
    })
  }

  const handleNumberSelect = (event) => {
    dispatch({
      type: "CHANGE_NUMBER",
      value: event.target.value
    })
  }

  // SET QUESTIONS FUNCTION / DISPATCH ACTION
  // This is set in the GET request with res.results
  const setQuestions = (value) => {
    dispatch ({
      type: 'SET_QUESTIONS',
      questions: value 
    })
  }

  // REFERENCE (DIRECTLY FROM API): https://opentdb.com/api_config.php
  const gameStart = () => {
    // Had never used this method before but it seems great for routes
    let triviaURL = `https://opentdb.com/api.php?amount=${questionNumber}`
    // if not 'SELECT ALL':
    if (questionCategory.length) { 
      // allows merging two or more arrays into one, without directly affecting original ("shallow copy")
      triviaURL = triviaURL.concat(`&category=${questionCategory}`)
    }
    if (questionDifficulty.length) {
      triviaURL = triviaURL.concat(`&difficulty=${questionDifficulty}`)
    }
    // if (questionType.length) {
    //   triviaURL = triviaURL.concat(`&type=${questionType}`)
    // }
    axios.get(triviaURL).then((res) => {
      setQuestions(res.data.results) // 'results' is an object from the API
    })
  } 

  useEffect(() => {
    getTrivia()
    // gameStart()
  }, [])
  
  return (
    <div className="container is-fluid">
      <h1 className="title is-1 has-text-info mt-6 is-size-1">TriviaFluent</h1>
      <h2 className="subtitle is-3 has-text-info">Brush up on your bar trivia!</h2>
      {/* ------- Category ------- */}
      <div className="field">
        <label className="label has-text-light is-size-5">Category:</label>
        <div className="control">
          <div className="select is-info is-rounded">
            <select className="has-background-grey-lighter"
              value={questionCategory}
              onChange={handleCategorySelect}
            >
              <option>Select All</option>
              {menuOptions.map((category) => {
                return (
                  <option 
                    value={category.id}
                    key={category.id}
                  >
                  {category.name}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
      </div>
      {/* ------- Difficulty ------- */}
      <div className="field">
        <label className="label has-text-light is-size-5">Difficulty:</label>
        <div className="control">
          <div className="select is-info is-rounded">
            <select className="has-background-grey-lighter"
            value={questionDifficulty}
            onChange={handleDifficultySelect}
            >
            <option value="">Select All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </div>
      {/* ------- Question Type ------- */}
      {/* <div>
        <h3>Question Type:</h3>
        <select 
          value={questionType}
          onChange={handleTypeSelect}
        >
          <option value="">Select All</option>
          <option value="multiple-choice">Multiple Choice</option>
          <option value="true/false">True/False</option>
        </select>
      </div> */}
      {/* ------- Question Amount ------- */}
      <div>
        <h3 className="label has-text-light is-size-5">Number of Questions:</h3>
        <h3 className="label has-text-light is-size-6">(max: 50)</h3>
        <div className="column is-2 is-offset-5">
          <input 
            value={questionNumber}
            onChange={handleNumberSelect}
            className="input is-normal has-background-grey-lighter is-rounded"
          />
        </div>
      </div>
  
      <button onClick={gameStart} className="button is-rounded is-info m-3">
        Start!
      </button>
    </div>
  )
}

export default GameStart