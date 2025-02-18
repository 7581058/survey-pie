import styled from 'styled-components'

import { AnswerProps } from '../../types'
const TextInput = ({
  answer = '',
  setAnswer,
  options,
}: AnswerProps<string>) => {
  return (
    <TextInputStyle
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value)
      }}
      placeholder={options?.placeholder}
      //일반적으로는 maxLength={options?.max}
      //하지만 undefined일때도 동작함
      //값이 있을때만 하고싶다면
      //undefined가 아닐때 maxLength를 넣어주고
      //undefined이라면 아무것도 분해가 안돼서 없는취급됨
      //컴포넌트 props 조건적으로 전달할 때 유용
      {...(options?.max && { maxLength: options.max })}
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
