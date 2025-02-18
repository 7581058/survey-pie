import styled from 'styled-components'

import { AnswerProps } from '../../types'

const TextAreaInput = ({ answer = '', setAnswer, options }: AnswerProps) => {
  return (
    <TextAreaStyle
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value)
      }}
      placeholder={options?.placeholder}
    />
  )
}

export default TextAreaInput

const TextAreaStyle = styled.textarea`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 12px 18px;

  font-size: 18px;
  line-height: 21px;
  width: 100%;
  height: 196px;
  resize: none;
  &::placeholder {
    color: #bdbdbd;
  }
`
