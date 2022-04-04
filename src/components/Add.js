import { useEffect, useState }from 'react'
import axios from 'axios'

const Add = () => {
  // STATES
  const [trivia, setTrivia] = useState([])
  const [newTrivia, setNewTrivia] =useState({
    category: null,
    difficulty: null,
    questionType: null,
    question: '',
    correct_answer: '',
    incorrect_answer_one: '',
    incorrect_answer_two: '',
    incorrect_answer_three: ''
  })
  
  // FETCH DATA
  const getTrivia = () => {
    axios.get('http://localhost:8000/api/trivia')
    .then((res) => {
      setTrivia(res.data)
    })
    .catch((err) => console.error(err))
  }

  // CREATE FUNCTIONS
  const handleChange = (event) => {
    setNewTrivia({ ...newTrivia, [event.target.name]: event.target.value })
  }

  const handleCreate = (event, addData) => {
    event.preventDefault()
    axios.post('http://localhost:8000/api/trivia', addData)
    .then((res) => {
      setTrivia([...trivia, res.data])
      console.log(res);
    })
  }

  useEffect(() => {
    getTrivia()
  }, [])

  return (
    <div>
      <h3>Submit your own questions</h3>
      {/* ------- Submit Form ------- */}
      <div>
        <form id="createForm" onSubmit={handleCreate}>
          <select name="category" id="category" form="createForm">
            <option name="category" value={newTrivia.category} onChange={handleChange}>GENERAL KNOWLEDGE</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ENTERTAINMENT: BOOKS</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ENTERTAINMENT: FILM</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ENTERTAINMENT: MUSIC</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ENTERTAINMENT: MUSICALS & THEATRES</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ENTERTAINMENT: TELEVISION</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ENTERTAINMENT: VIDEO GAMES</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ENTERTAINMENT: BOARD GAMES</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>SCIENCE & NATURE</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>SCIENCE: COMPUTERS</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>SCIENCE: MATHEMATICS</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>MYTHOLOGY</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>SPORTS</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>GEOGRAPHY</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>HISTORY</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>POLITICS</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ART</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>CELEBRITIES</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ANIMALS</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>VECHICLES</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ENTERTAINMENT: COMICS</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>SCIENCE: GADGETS</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ENTERTAINMENT: JAPANESE ANIME & MANGA</option>
            <option name="category" value={newTrivia.category} onChange={handleChange}>ENTERTAINMENT: CARTOON AND ANIMATIONS</option>
          </select>
          <select name="difficulty" id="difficulty" form="createForm">
            <option name="difficulty" value={newTrivia.difficulty} onChange={handleChange}>EASY</option>
            <option name="difficulty" value={newTrivia.difficulty} onChange={handleChange}>MEDIUM</option>
            <option name="difficulty" value={newTrivia.difficulty} onChange={handleChange}>HARD</option>
          </select>
          <select name="questionType" id="questionType" form="createForm">
            <option name="questionType" value={newTrivia.questionType} onChange={handleChange}>MULTIPLE CHOICE</option>
            <option name="questionType" value={newTrivia.questionType} onChange={handleChange}>TRUE/FALSE</option>
          </select>
          <input 
            type="text" 
            name="question" 
            value={newTrivia.question} 
            onChange={handleChange} 
            placeholder="Question"/>
          <input 
            type="text" 
            name="correct_answer" 
            value={newTrivia.correct_answer} 
            onChange={handleChange}
            placeholder="Correct Answer" />
          <input 
            type="text" 
            name="incorrect_answer_one" 
            value={newTrivia.incorrect_answer_one} 
            onChange={handleChange} 
            placeholder="Incorrect Answer #1"/>
          <input 
            type="text" 
            name="incorrect_answer_two" 
            value={newTrivia.incorrect_answer_two} 
            onChange={handleChange} 
            placeholder="Incorrect Answer #2"/>
          <input 
            type="text" 
            name="incorrect_answer_three" 
            value={newTrivia.incorrect_answer_three} 
            onChange={handleChange} 
            placeholder="Incorrect Answer #3"/>
          <input type="submit" />
        </form>
      </div>
      {/* ------- Display Questions ------- */}
      <div className="trivia">
        { trivia.map((trivia) => {
          return (
            <div className="questions" key={trivia.id}>
              <h5>Category: {trivia.category}</h5>
              <h5>Difficulty: {trivia.difficulty}</h5>
              <h5>Type: {trivia.questionType}</h5>
              <h5>Question: {trivia.question}</h5>
              <h5>Correct Answer: {trivia.correct_answer}</h5>
              <h5>Incorrect Answer #1: {trivia.incorrect_answer_one}</h5>
              <h5>Incorrect Answer #2: {trivia.incorrect_answer_two}</h5>
              <h5>Incorrect Answer #2: {trivia.incorrect_answer_three}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Add