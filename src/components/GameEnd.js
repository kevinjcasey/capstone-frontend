import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

const GameEnd = () => {
  const score = useSelector((state) => state.score)

  const dispatch = useDispatch()

  const backHome = () => {
    dispatch({
      type: 'SET_INDEX',
      index: 0,
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  
    dispatch({
      type: 'SET_QUESTIONS',
      questions: [],
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  return (
    <div>
      <h3>Final Score: {score}</h3>
      <button onClick={backHome}><Link to="/">Back to Home</Link></button>
      <button><Link to="/add">Contribute</Link></button>
    </div>
  )
}

export default GameEnd