import styled from 'styled-components'

import { QustionOptionsType } from '../../mocks/questions'

interface TextAreaInputProps {
  options: QustionOptionsType
}
const TextAreaInput = ({ options }: TextAreaInputProps) => {
  return <TextAreaStyle placeholder={options.placeholder} />
}

export default TextAreaInput

const TextAreaStyle = styled.textarea`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 12px 18px;

  font-size: 18px;
  line-height: 21px;
  height: 196px;
  resize: none;
  &::placeholder {
    color: #bdbdbd;
  }
`
