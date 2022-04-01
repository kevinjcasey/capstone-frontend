import React, { useState, useEffect } from 'react'
import axios from 'axios'

// USER AUTH / REACT ROUTER
import { Link } from 'react-router-dom'


const Questions = () => {
  
  const [trivia, setTrivia] = useState([])
  
  const [questionIndex, setQuestionIndex] = useState(0)

  const [answerOptions, setAnswerOptions] = useState([])

  const [answerSelected, setAnswerSelected] = useState(false)

  const [userAnswer, setUserAnswer] = useState(null)

  const [score, setScore] = useState(0)

  const getTrivia = () => axios.get('https://opentdb.com/api.php?amount=10&category=11&type=multiple').then((res) => {
    setTrivia(res.data.results)
  })
  
  // {
  //   "category": "Entertainment: Film",
  //   "type": "multiple",
  //   "difficulty": "easy",
  //   "question": "Who plays Alice in the Resident Evil movies?",

  //   "correct_answer": "Milla Jovovich",
  
  //   "incorrect_answers": [
  //   "Madison Derpe",
  //   "Milla Johnson",
  //   "Kim Demp"
  //   ]
  //   },

  


  // need to pass a parameter that holds the answers array?
  const handleAnswer = () => {

    console.log(trivia[0].correct_answer);
    console.log(...trivia[0].incorrect_answers);
  }
  
  const question = trivia[questionIndex] 

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const answersArray = () => {
    let answers = [...question.incorrect_answers]
    answers.splice(getRandomInt(question.incorrect_answers.length), 0, question.correct_answer)

    setAnswerOptions(answers)
  }
  
  useEffect(() => {
    getTrivia()
    answersArray()
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
      { trivia.map((trivia) => {
        return (
          <div key={trivia.question}>
            <h3 dangerouslySetInnerHTML={{ __html: trivia.question}} />

            <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: trivia.correct_answer}}></button>
            <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: trivia.incorrect_answers[0]}}></button>
            <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: trivia.incorrect_answers[1]}}></button>
            <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: trivia.incorrect_answers[2]}}></button>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Questions