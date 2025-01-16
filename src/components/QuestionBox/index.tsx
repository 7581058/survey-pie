import { QuestionType } from '../../mocks/questions'
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
    <div>
      <Title>{question.title}</Title>
      <Description>{question.description}</Description>
      <Body type={question.type} answer={answer} setAnswer={setAnswer} />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </div>
  )
}

export default QuestionBox
