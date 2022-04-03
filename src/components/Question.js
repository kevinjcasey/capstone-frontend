import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Question = () => {
  // STATES
  // const [questions, setQuestions] = useState([])
  const [answerOptions, setAnswerOptions] = useState([])
  const [answerSelected, setAnswerSelected] = useState(false)
  const [userAnswer, setUserAnswer] = useState(null)

  // DEFINING USE DISPATCH
  const dispatch = useDispatch()

  // DATA FROM STORE
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)
  const score = useSelector((state) => state.score)

  // QUESTION and ANSWER
  // console.log(questions[questionIndex]);
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

  // USER ANSWER CHOICE + SCORE INCREASE
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
  
  useEffect(() => {
    handleAnswer()
    // Will this work? No.
    questions.map((question) => {
      return {
        ...question,
        question: question.question,
        correct_answer: question.correct_answer,
        incorrect_answers: question.incorrect_answers
      }
    }) 
  }, [])

  console.log(answerOptions);

  return (
    <div>
      {/* Displaying the first question and answer options */}
      <h2>Question {questionIndex + 1}</h2>
      <h3 dangerouslySetInnerHTML={{ __html: question?.question}} />
      <ul>
        { answerOptions.map((option, index) => {
          return (
            // <h3 
            //   dangerouslySetInnerHTML={{ __html: option}} 
            //   onClick={handleAnswerChoice}
            // />
            <h3 key={option.id}>{option}</h3>
          )
        }
        )}
      </ul>
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default Question