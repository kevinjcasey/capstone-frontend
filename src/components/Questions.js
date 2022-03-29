import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const Button = ({ answer }) => {
//   <button>
//     {answer}
//   </button>
// }

const Questions = ( { question, correct_answer, incorrect_answers }) => {
  
  const [newQuestion, setNewQuestion] = useState([])

  const [answers, setAnswers] = useState({
    'correct_answer': true,
    'incorrect_answers': false
  })

  const [correctAnswer, setCorrectAnswer] = useState(true)
  const [incorrectAnswers, setIncorrectAnswers] = useState(false)

  const getTrivia = () => axios.get('https://opentdb.com/api.php?amount=10&category=11&type=multiple').then((res) => {
    setNewQuestion(res.data.results)
    setAnswers(res.data.results, correct_answer, ...incorrect_answers)
  })

  const handleAnswer = () => {

    if (correctAnswer === true ) {
      console.log('correct!')
    } else if (incorrectAnswers === false) {
      console.log('incorrect!');
    }
    
  }

  const shuffleAnswer = [correct_answer, incorrect_answers]
  
  useEffect(() => {
    getTrivia()
  }, [])
  
  return (
    <div className="App">
      <h1>Movie Trivia</h1>
      { newQuestion.map((questions) => {
        return (
          <div key={questions.question}>
            <h3 dangerouslySetInnerHTML={{ __html: questions.question}} />

            <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: questions.correct_answer}}></button>
            <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: questions.incorrect_answers[0]}}></button>
            <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: questions.incorrect_answers[1]}}></button>
            <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: questions.incorrect_answers[2]}}></button>
          </div>
        )
      })}
    </div>
  )
}

export default Questions