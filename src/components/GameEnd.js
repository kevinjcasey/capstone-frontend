import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
      <button onClick={backHome}>Back to Home</button>
    </div>
  )
}

export default GameEnd