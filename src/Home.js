import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Questions from './components/Questions';

// type Props = {
//   index: number;
//   question: string;
//   answer: string;
//   categorgy: string;
// }

const Home = () => {

  const [question, setQuestion] = useState('')
  const [newQuestion, setNewQuestion] = useState([])
  const [category, setCategory] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [incorrectAnswers, setIncorrectAnswers] = useState('')

  let correct_answer = correct_answer
  let incorrect_answers = incorrect_answers

  const [answers, setAnswers] = useState({
    correctAnswer: correct_answer,
    incorrectAnswers: incorrect_answers
  })

  const getTrivia = () => axios.get('https://opentdb.com/api.php?amount=10&category=11&type=multiple').then((res) => {
    // setQuestion(res.data.results[0].question.replaceAll('&quot;', '"').replaceAll('&#039;', "'"));
    // setCorrectAnswer(res.data.results[0].correct_answer.replaceAll('&quot;', '"').replaceAll('&#039;', "'"));
    // setIncorrectAnswers(res.data.results[0].incorrect_answers[1].replaceAll('&quot;', '"').replaceAll('&#039;', "'"));
    console.log(res.data.results[0].question);
    setNewQuestion(res.data.results)
  })

  // Need to create an array or state that holds both correct and incorrect answers


  useEffect(() => {
    getTrivia()
  }, [])

  return (
    <div className="App">
      <h1>Movie Trivia</h1>
      { newQuestion.map((questions) => {
        return (
          <div key={questions.question}>
            <h3>{questions.question.replaceAll('&quot;', '"').replaceAll('&#039;', "'").replaceAll('&amp;', '&')}</h3>
            <h3>{questions.correct_answer.replaceAll('&quot;', '"').replaceAll('&#039;', "'")}</h3>
            {/* <h3>{questions.incorrect_answers[''].replaceAll('&quot;', '"').replaceAll('&#039;', "'")}</h3> */}
          </div>
        )
      })}
      {/* <h3>{category}</h3> */}
      {/* <h3>{question}</h3>
      <h3>{correctAnswer}</h3> */}
      {/* <h3>{incorrectAnswers}</h3> */}
      <Questions question={''} answers={[]} userAnswer={undefined} questionNumber={0} totalQuestions={0}        
      />
    </div>
  );
}

export default Home;
