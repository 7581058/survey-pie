import styled from 'styled-components'

import { QuestionType, QustionOptionsType } from '../../mocks/questions'
import ActionButtons from '../ActionButtons'
import Body from '../Body'
import Description from '../Description'
import Title from '../Title'

export interface StepProps {
  questionsLength: number
  step: number
}

// * 임시 타입
export interface AnswerProps {
  answer: any
  setAnswer: any
  options?: QustionOptionsType | null
}

interface QuestionBoxProps extends StepProps, AnswerProps {
  question: QuestionType
}
const QuestionBox = ({
  question,
  questionsLength,
  step,
  answer,
  setAnswer,
}: QuestionBoxProps) => {
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
      <ActionButtons questionsLength={questionsLength} step={step} />
    </QuestionBoxWrap>
  )
}

export default QuestionBox

const QuestionBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
