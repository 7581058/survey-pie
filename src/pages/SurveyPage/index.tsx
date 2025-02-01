import { useState } from 'react'
import { useParams } from 'react-router'

import ProgressIndicator from '../../components/ProgressIndicator'
import QuestionBox from '../../components/QuestionBox'
import { questions } from '../../mocks/questions'

const SurveyPage = () => {
  const params = useParams()
  const step = Number(params.step)

  const [answers, setAnswers] = useState([])
  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers]
            newAnswers[step] = newAnswer
            return newAnswers
          })
        }}
      />
    </div>
  )
}

export default SurveyPage
