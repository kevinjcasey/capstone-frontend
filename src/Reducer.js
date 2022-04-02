// Setting initial state here rather than passing through createStore due to small application/data size
const initialState = {
  // Moving this state from GameStart.js
  menuOptions: {
    category: '',
    difficulty: '',
    type: '',
    number_of_questions: 10,
  },
  questions: [], // Creating an array of questions to reference index
  index: 0, // Questions index
  score: 0, // User score
}

// REFERENCE: https://redux.js.org/usage/structuring-reducers/refactoring-reducer-example
const Reducer = (state = initialState, action) => {
  // Switch/case acts similarly to an if/else statement
  // Tests the value against multiple cases
  switch(action.type) {

    case "CHANGE_CATEGORY":
      return {
        ...state, // creating a copy of the state object^
        // setting the state to a new object - similar to [event.target.name]: event.target.value
        menuOptions: { 
          ...state.menuOptions,
          category: action.value // Grabbing the value of selected category
        }
      }

    case "CHANGE_DIFFICULTY":
      return {
        ...state,
        menuOptions: {
          ...state.menuOptions,
          difficulty: action.value
        }
      }

    case "CHANGE_TYPE":
      return {
        ...state,
        menuOptions: {
          ...state.menuOptions,
          type: action.value
        }
      }

      case "CHANGE_NUMBER":
        return {
          ...state,
          menuOptions: {
            ...state.menuOptions,
            number_of_questions: action.value
          }
        }

      case "SET_QUESTIONS":
        return {
          ...state,
          questions: action.questions 
        }

      case "SET_INDEX":
        return {
          ...state,
          index: action.index
        }

      case "SET_SCORE":
        return {
          ...state,
          score: action.score
        }

    default: // Returns if no change in initial state
      return state   
  }
}

export default Reducer 