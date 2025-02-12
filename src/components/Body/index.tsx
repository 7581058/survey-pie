import React from 'react'
import styled from 'styled-components'

import { QuestionInputType } from '../../mocks/questions'
import { AnswerProps } from '../../types'
import SelectInput from '../SelectInput'
import TextAreaInput from '../TextAreaInput'
import TextInput from '../TextInput'

export interface BodyProps extends AnswerProps {
  type: QuestionInputType
}

const Body = ({ type, answer, setAnswer, options }: BodyProps) => {
  let InputComponent: React.ElementType | null = null
  if (type === 'select') {
    InputComponent = SelectInput
  } else if (type === 'text') {
    InputComponent = TextInput
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput
  }

  return (
    <BodyWrap>
      {InputComponent && (
        <InputComponent
          answer={answer}
          setAnswer={setAnswer}
          options={options}
        />
      )}
    </BodyWrap>
  )
}

export default Body

const BodyWrap = styled.div`
  margin: 0 38px;
  flex: 1;
  height: 100%;
`
