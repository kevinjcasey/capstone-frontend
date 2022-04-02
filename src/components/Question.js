import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Question = () => {
  // STATES
  const [questions, setQuestions] = useState([])
  const [answerOptions, setAnswerOptions] = useState([])
  const [answerSelected, setAnswerSelected] = useState(false)
  const [userAnswer, setUserAnswer] = useState(null)

  // DEFINING USE DISPATCH
  const dispatch = useDispatch()

  // DATA FROM STORE
  const score = useSelector((state) => state.score)
  // const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  // QUESTION and ANSWER
  const question = questions[questionIndex] // initial value = 0
  const answer = question && question.correct_answer
  
  // COMBINING CORRECT AND INCORRECT ANSWERS
  // REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const shuffleAnswers = (max) => {
    // Never rotates the last answer option...?
    return Math.floor(Math.random() * max)
  }

  const handleAnswer = () => {
    if (!question) { // initial state
      return;
    }
    // grabbing all incorrect answers inside the array
    let answers = [...question.incorrect_answers]
    // randomizing position of correct answer
    // splice overwrites original array
    answers.splice(shuffleAnswers(question.incorrect_answers.length), 0, question.correct_answer)

    setAnswerOptions(answers)
  }

  // USER ANSWER CHOICE
  const handleAnswerChoice = (event) => {
    setAnswerSelected(true)
    // textContent changes the text of the element to be readable
    // original state set to 'null'
    setUserAnswer(event.target.textContent)
    
    if (event.target.textContent === answer) {
      // update user score
      dispatch({
        type: 'SET_SCORE',
        score: score +1
      })
    }
  }
  
  // NEXT QUESTION
  const nextQuestion = () => {
    if (questionIndex + 1 <= questions.length) {
      // resetting user answer choices
      setAnswerSelected(false)
      setUserAnswer(null)
      // update question index
      dispatch({
        type: 'SET_INDEX',
        index: questionIndex + 1,
      })
    }
  }

  console.log(questions);
  
  useEffect(() => {
    handleAnswer()
    // Will this work?
    questions.map((question) => {
      return {
        ...question,
        question: question.question,
        correct_answer: question.correct_answer,
        incorrect_answers: question.incorrect_answers
      }
    })
  }, [])

  return (
    <div>
      {/* Displaying the first question and answer options */}
      <h2>Question {questionIndex + 1}</h2>
      {/* <h3 dangerouslySetInnerHTML={{ __html: questions.questions}} /> */}
      <h3>{questions.question}</h3>
      <ul>
        { answerOptions.map((option, index) => {
          return (
            <li
              key={index}
              onClick={handleAnswerChoice}
              dangerouslySetInnerHTML={{ __html: answerOptions.option}}
            >
            </li>
          )
        }
        )}
      </ul>
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default Question