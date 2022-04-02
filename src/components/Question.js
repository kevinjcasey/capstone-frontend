import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Question = () => {
  // STATES
  const [answerOptions, setAnswerOptions] = useState([])
  const [answerSelected, setAnswerSelected] = useState(false)
  const [userAnswer, setUserAnswer] = useState(null)

  // DEFINING USE DISPATCH
  const dispatch = useDispatch()

  // DATA FROM STORE
  const score = useSelector((state) => state.score)
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  // QUESTION and ANSWER
  const question = questions[questionIndex] // initial value = 0
  const answer = question.correct_answer

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

  useEffect(() => {
    handleAnswer()
  }, [])

  return (
    <div>Question</div>
  )
}

export default Question