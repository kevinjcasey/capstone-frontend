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

  // const [question, setQuestion] = useState('')
  // const [newQuestion, setNewQuestion] = useState([])
  // const [category, setCategory] = useState('')
  // const [correctAnswer, setCorrectAnswer] = useState('')
  // const [incorrectAnswers, setIncorrectAnswers] = useState('')

  // const correct_answer = correct_answer
  // const incorrect_answers = incorrect_answers 
 
  // const [answers, setAnswers] = useState({
  //   'correct_answer': '',
  //   'incorrect_answers': ''
  // })

  // const getTrivia = () => axios.get('https://opentdb.com/api.php?amount=10&category=11&type=multiple').then((res) => {
  //   setNewQuestion(res.data.results)
  //   setAnswers(res.data.results)
  // })

  // Need to create an array or state that holds both correct and incorrect answers?
  


  // useEffect(() => {
  //   getTrivia()
  // }, [])

  // replaceAll('&quot;', '"').replaceAll('&#039;', "'").replaceAll('&amp;', '&')

  return (
    <div>
      <Questions />
    </div>
  );
}

export default Home;
