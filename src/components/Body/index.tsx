import React from 'react'

import { QuestionInputType } from '../../mocks/questions'
import { AnswerProps } from '../QuestionBox'
import TextInput from '../TextInput'

export interface BodyProps extends AnswerProps {
  type: QuestionInputType
}

const Body = ({ type, answer, setAnswer }: BodyProps) => {
  let InputComponent: React.ElementType | null = null
  if (type === 'select') {
    //inputComponent = TextInput
  } else if (type === 'text') {
    InputComponent = TextInput
  } else if (type === 'textarea') {
    //inputComponent = TextInput
  }

  return (
    <div>
      {InputComponent && (
        <InputComponent answer={answer} setAnswer={setAnswer} />
      )}
    </div>
  )
}

export default Body
