import React, { useState, useEffect } from 'react'
import axios from 'axios'

// USER AUTH / REACT ROUTER
import { Link } from 'react-router-dom'


const Questions = ( { question, correct_answer, incorrect_answers }) => {
  
  const [newQuestion, setNewQuestion] = useState([])

  const [answers, setAnswers] = useState({
    'correct_answer': true,
    'incorrect_answers': false
  })

  const [correctAnswer, setCorrectAnswer] = useState('')
  const [incorrectAnswers, setIncorrectAnswers] = useState('')

  const getTrivia = () => axios.get('https://opentdb.com/api.php?amount=10&category=11&type=multiple').then((res) => {
    setNewQuestion(res.data.results)
    setAnswers(res.data.results)
  })

  const choices = [correct_answer, incorrect_answers]

    // need to pass a parameter that holds the answers array
  const handleAnswer = () => {



    if (newQuestion.correct_answer === choices[0]) {
      console.log('correct!')
    } else if (newQuestion.incorrect_answers === choices[1]) {
      console.log('incorrect!');
    }
    
  }

  const shuffleAnswer = [correct_answer, incorrect_answers]
  
  useEffect(() => {
    getTrivia()
  }, [])
  
  return (
    <>
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    <div>
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
    </>
  )
}

export default Questions