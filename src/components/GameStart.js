import { useEffect, useState } from 'react'
import axios from 'axios'

// REDUX
  // useSelector is allowing data to be extracted from the store
  // useDispatch (dispatch) allows dispatching actions and updating
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

const GameStart = () => {
  // STATES
  const [menuOptions, setMenuOptions] = useState([])
  // const [questionCategory, setQuestionCategory] = useState('')
  // const [questionDifficulty, setQuestionDifficulty] = useState('')
  // const [questionType, setQuestionType] = useState('')
  // const [questionNumber, setQuestionNumber] = useState(10)

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

  // const [questions, setQuestions] = useState([])

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
  }, [])
  
  return (
    <div>
      <button><Link to="/add">Contribute</Link></button>
      <h1 className='title'>Bar Trivia</h1>
      {/* ------- Category ------- */}
      <div>
        <h3>Category:</h3>
        <select
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
      {/* ------- Difficulty ------- */}
      <div>
        <h3>Difficulty:</h3>
        <select 
          value={questionDifficulty}
          onChange={handleDifficultySelect}
        >
          <option value="">Select All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
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
        <h3>Number of Questions:</h3>
        <input 
          value={questionNumber}
          onChange={handleNumberSelect}
        />
      </div>
  
      <button><Link to="/questions" onClick={gameStart}>
        Start!
      </Link></button>
      
      
    </div>
  )
}

export default GameStart