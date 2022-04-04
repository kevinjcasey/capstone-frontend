// import { useState, useEffect } from 'react'
// import axios from 'axios'

// // USER AUTH / REACT ROUTER
// import { Link } from 'react-router-dom'


// const Questions = () => {
  
//   const [trivia, setTrivia] = useState([])
  
//   const [questionIndex, setQuestionIndex] = useState(0)

//   const [answerOptions, setAnswerOptions] = useState([])

//   // const [answerSelected, setAnswerSelected] = useState(false)

//   // const [userAnswer, setUserAnswer] = useState(null)

//   // const [score, setScore] = useState(0)

//   const getTrivia = () => axios.get('https://opentdb.com/api.php?amount=10&category=11&type=multiple').then((res) => {
//     setTrivia(res.data.results)
//   })
  
//   // {
//   //   "category": "Entertainment: Film",
//   //   "type": "multiple",
//   //   "difficulty": "easy",
//   //   "question": "Who plays Alice in the Resident Evil movies?",

//   //   "correct_answer": "Milla Jovovich",
  
//   //   "incorrect_answers": [
//   //   "Madison Derpe",
//   //   "Milla Johnson",
//   //   "Kim Demp"
//   //   ]
//   //   },

  
//   const question = trivia[questionIndex] 
//   const answer = trivia.correct_answer

//   const shuffleAnswers = () => {
//     // Never rotates the last answer option...?
//     return Math.floor(Math.random() * Math.max())
//   }

//   const handleAnswer = () => {
//     console.log(trivia[0].question);
//   }

//   const nextQuestion = () => {
//     setQuestionIndex(questionIndex + 1)
//   }

//   useEffect(() => {
//     if (!question) {
//       return;
//     }
//     let answers = [...question.incorrect_answers]
//     answers.splice(shuffleAnswers(question.incorrect_answers.length), 0, question.correct_answer)
    
//     setAnswerOptions(answers)
//   }, [])
    
  
//   useEffect(() => {
//     getTrivia()
//   }, [])
  
//   return (
//     <>
//     <ul>
//       <li>
//         <Link to="/register">Register</Link>
//       </li>
//       <li>
//         <Link to="/login">Login</Link>
//       </li>
//     </ul>
//     <div>
//       <h1>Movie Trivia</h1>
//       {answerOptions}
//       {answerOptions}
//       { trivia.map((trivia) => {
//         return (
//           <div key={trivia.question}>
//             <h3 dangerouslySetInnerHTML={{ __html: trivia.question}} />

//             <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: trivia.correct_answer}}></button>
//             <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: trivia.incorrect_answers[0]}}></button>
//             <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: trivia.incorrect_answers[1]}}></button>
//             <button onClick={handleAnswer} dangerouslySetInnerHTML={{ __html: trivia.incorrect_answers[2]}}></button>
//           </div>
//         )
//       })}
//     </div>
//     </>
//   )
// }

// export default Questions