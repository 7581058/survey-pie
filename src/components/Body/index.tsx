import React from 'react'
import styled from 'styled-components'

import { AnswerDataType, AnswerProps, QuestionInputType } from '../../types'
import SelectInput from '../SelectInput'
import TextAreaInput from '../TextAreaInput'
import TextInput from '../TextInput'

export interface BodyProps<T extends AnswerDataType> extends AnswerProps<T> {
  type: QuestionInputType
}

const Body = <T extends AnswerDataType>({
  type,
  answer,
  setAnswer,
  options,
}: BodyProps<T>) => {
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
