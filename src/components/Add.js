import { useEffect, useState }from 'react'
import axios from 'axios'

const Add = () => {
  // STATES
  const [trivia, setTrivia] = useState([])
  const [newTrivia, setNewTrivia] =useState({
    // category: '',
    // difficulty: null,
    // questionType: null,
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

  const handleSubmit = (event) => {
    event.preventDefault()
    handleCreate(newTrivia)
  }

  const handleCreate = (addData) => {
    axios.post('http://localhost:8000/api/trivia', addData)
    .then((res) => {
      setTrivia([...trivia, res.data])
    })
  }

  useEffect(() => {
    getTrivia()
  }, [])

  // const triviaArray = [
  //   {
  //     name: 'GENERAL KNOWLEDGE',
  //     id: 1
  //   },
  //   {
  //     name: 'ENTERTAINMENT: BOOKS',
  //     id: 2
  //   },
  //   {
  //     name: 'ENTERTAINMENT: FILM',
  //     id: 3
  //   }
  // ]

  return (
    <div>
      <h3 className="is-size-2 has-text-info">Submit your own questions for review</h3>
      {/* ------- Submit Form ------- */}
      <div className="field">
        <form id="createForm" onSubmit={handleSubmit}>
            {/* <select defaultValue="default" name="category" onChange={handleChange}>
              <option disabled value="default">Select Category</option>
          { triviaArray.map((category) => (
            <option value={category.name}>{category.name}</option>
          ))}
            </select> */}
          
          <label className="label has-text-light is-size-5">Category:</label>
          <div className="control">
            <div className="select is-info is-rounded">
              <select name="category" id="category" form="createForm" onChange={handleChange} className="has-background-grey-lighter">
                <option name="category" value={newTrivia.category}>General Knowledge</option>
                <option name="category" value={newTrivia.category}>Entertainment: Books</option>
                <option name="category" value={newTrivia.category}>Entertainment: Film</option>
                <option name="category" value={newTrivia.category}>Entertainment: Music</option>
                <option name="category" value={newTrivia.category}>Entertainment: Muiscals and Thetres</option>
                <option name="category" value={newTrivia.category}>Entertainment: Television</option>
                <option name="category" value={newTrivia.category}>Entertainment: Video Games</option>
                <option name="category" value={newTrivia.category}>Entertainment: Board Games</option>
                <option name="category" value={newTrivia.category}>Science & Nature</option>
                <option name="category" value={newTrivia.category}>Science: Computers</option>
                <option name="category" value={newTrivia.category}>Science: Mathematics</option>
                <option name="category" value={newTrivia.category}>Mythology</option>
                <option name="category" value={newTrivia.category}>Sports</option>
                <option name="category" value={newTrivia.category}>Geography</option>
                <option name="category" value={newTrivia.category}>History</option>
                <option name="category" value={newTrivia.category}>Politics</option>
                <option name="category" value={newTrivia.category}>Art</option>
                <option name="category" value={newTrivia.category}>Celebrities</option>
                <option name="category" value={newTrivia.category}>Animals</option>
                <option name="category" value={newTrivia.category}>Vehichles</option>
                <option name="category" value={newTrivia.category}>Entertainment: Comics</option>
                <option name="category" value={newTrivia.category}>Science: Gadgets</option>
                <option name="category" value={newTrivia.category}>Entertainment: Japanese Anime and Manga</option>
                <option name="category" value={newTrivia.category}>Entertainment: Cartoon & Animations</option>
              </select>
            </div>
          </div>
          <br />
          <label className="label has-text-light is-size-5">Difficulty:</label>
          <div className="control">
            <div className="select is-info is-rounded">
              <select name="difficulty" id="difficulty" form="createForm" onChange={handleChange} className="has-background-grey-lighter">
                <option name="difficulty" value={newTrivia.difficulty}>Easy</option>
                <option name="difficulty" value={newTrivia.difficulty}>Medium</option>
                <option name="difficulty" value={newTrivia.difficulty}>Hard</option>
              </select>
            </div>
          </div>
          <br />
          <label className="label has-text-light is-size-5">Category:</label>
          <div className="control">
            <div className="select is-info is-rounded">
              <select name="questionType" id="questionType" form="createForm" onChange={handleChange} className="has-background-grey-lighter">
                <option name="questionType" value={newTrivia.questionType}>Multiple Choice</option>
                <option name="questionType" value={newTrivia.questionType}>True/False</option>
              </select>
            </div>
          </div>
          <br />
          {/* <select name="category" id="category" form="createForm" onChange={handleChange}>
            <option name="category" value={newTrivia.category}>Art</option>
            <option name="category" value={newTrivia.category}>History</option>
          </select> */}
          <div className="column is-2 is-offset-5">
            <input 
              type="text" 
              name="question" 
              value={newTrivia.question} 
              onChange={handleChange} 
              placeholder="Question"
              className="input is-normal has-background-grey-lighter is-rounded mb-3 has-text-weight-bold"/>
            <br />
            <input 
              type="text" 
              name="correct_answer" 
              value={newTrivia.correct_answer} 
              onChange={handleChange}
              placeholder="Correct Answer" 
              className="input is-normal has-background-grey-lighter is-rounded mb-3 has-text-weight-bold"/>
            <br />
            <input 
              type="text" 
              name="incorrect_answer_one" 
              value={newTrivia.incorrect_answer_one} 
              onChange={handleChange} 
              placeholder="Incorrect Answer #1"
              className="input is-normal has-background-grey-lighter is-rounded mb-3 has-text-weight-bold"/>
            <br />
            <input 
              type="text" 
              name="incorrect_answer_two" 
              value={newTrivia.incorrect_answer_two} 
              onChange={handleChange} 
              placeholder="Incorrect Answer #2"
              className="input is-normal has-background-grey-lighter is-rounded mb-3 has-text-weight-bold"/>
            <br />
            <input 
              type="text" 
              name="incorrect_answer_three" 
              value={newTrivia.incorrect_answer_three} 
              onChange={handleChange} 
              placeholder="Incorrect Answer #3"
              className="input is-normal has-background-grey-lighter is-rounded mb-3 has-text-weight-bold"/>
          </div>
          <br />
          
          <input type="submit" className="button is-rounded"/>
        </form>
      </div>
      {/* ------- Display Questions ------- */}
      <div className="trivia">
        { trivia.map((trivia) => {
          return (
            <div key={trivia.id}>
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