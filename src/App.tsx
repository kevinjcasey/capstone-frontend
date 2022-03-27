import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Questions from './components/Questions';

// type Props = {
//   question: string;
//   answer: string;
//   categorgy: string;
// }

const App = () => {

  const [question, setQuestion] = useState([])
  // const [category, setCategory] = useState('')
  // const [answer, setAnswer] = useState('')

  const getTrivia = () => axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
    setQuestion(res.data.results[0].question);
    // setAnswer(res.data)
    // setCategory(res.data.categorgy);
    console.log(question);
    // console.log(answer);
    // console.log(category);



  })

  useEffect(() => {
    getTrivia()
  }, [])

  return (
    <div className="App">
      <h1>Movie Trivia</h1>
      <h3>{question}</h3>
      {/* <Questions 
        question={question}
      /> */}
    </div>
  );
}

export default App;
