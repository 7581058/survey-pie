import React from 'react'

import { QuestionInputType } from '../../mocks/questions'
import { AnswerProps } from '../QuestionBox'
import SelectInput from '../SelectInput'
import TextAreaInput from '../TextAreaInput'
import TextInput from '../TextInput'

export interface BodyProps extends AnswerProps {
  type: QuestionInputType
}

const Body = ({ type, answer, setAnswer }: BodyProps) => {
  let InputComponent: React.ElementType | null = null
  if (type === 'select') {
    InputComponent = SelectInput
  } else if (type === 'text') {
    InputComponent = TextInput
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput
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
