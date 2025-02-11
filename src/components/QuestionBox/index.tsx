import { useParams } from 'react-router'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { QustionOptionsType } from '../../mocks/questions'
import { answersAtom } from '../../stores/answers/atom'
import { questionsAtom } from '../../stores/questions/atom'
import ActionButtons from '../ActionButtons'
import Body from '../Body'
import Description from '../Description'
import Title from '../Title'

// * 임시 타입
export interface AnswerProps {
  answer: any
  setAnswer: any
  options?: QustionOptionsType | null
}

const QuestionBox = () => {
  const params = useParams()
  const step = Number(params.step)

  const questions = useRecoilValue(questionsAtom)
  const [answers, setAnswers] = useRecoilState(answersAtom)

  const question = questions[step]
  const answer = answers[step]
  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers]
      newAnswers[step] = newAnswer
      return newAnswers
    })
  }

  return (
    <QuestionBoxWrap>
      <Title>{question.title}</Title>
      <Description>{question.description}</Description>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons />
    </QuestionBoxWrap>
  )
}

export default QuestionBox

const QuestionBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
