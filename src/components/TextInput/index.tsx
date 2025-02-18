import styled from 'styled-components'

import { AnswerProps } from '../../types'
const TextInput = ({ answer = '', setAnswer, options }: AnswerProps) => {
  return (
    <TextInputStyle
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value)
      }}
      placeholder={options?.placeholder}
    />
  )
}

export default TextInput

const TextInputStyle = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 12px 18px;
  width: 100%;
  height: 45px;
  &::placeholder {
    color: #bdbdbd;
  }
`
