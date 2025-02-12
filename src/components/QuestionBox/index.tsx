import styled from 'styled-components'

import { useCurrentAnswer } from '../../hooks/useCurrentAnswer'
import { useCurrentQuestion } from '../../hooks/useCurrentQuestion'
import ActionButtons from '../ActionButtons'
import Body from '../Body'
import Description from '../Description'
import Title from '../Title'

const QuestionBox = () => {
  const [answer, setAnswer] = useCurrentAnswer()
  const question = useCurrentQuestion()
  if (!question) return null
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
