import React from 'react'

type Props = {
  question: string;
  answers: string[];
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
}
const Questions: React.FC<Props> = ({
  question,
  answers,
  userAnswer,
  questionNumber,
  totalQuestions
}) => {
  return (
    <div>Questions</div>
  )
}

export default Questions