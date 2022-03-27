import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Questions from './components/Questions';

type Props = {
  question: string;
}

const App: React.FC<Props> = () => {

  const [question, setQuestion] = useState()

  const getTrivia = () => {
    axios.get('https://opentdb.com/api.php?amount=10&category=11&type=multiple').then((res) => {
      setQuestion(res.data.question)
      console.log(question);
      
    })
  }

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
