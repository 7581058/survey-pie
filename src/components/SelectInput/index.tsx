import styled from 'styled-components'

import { AnswerProps } from '../QuestionBox'

const SelectItem = ({ children }) => {
  return (
    <ItemWrap>
      <label>
        <input type="checkbox" />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrap>
  )
}
const SelectInput = ({ answer, setAnswer, options }: AnswerProps) => {
  return (
    <SelectInputWrap>
      {options?.items?.map((item, index) => {
        return <SelectItem key={index}>{item}</SelectItem>
      })}
    </SelectInputWrap>
  )
}

export default SelectInput

const SelectInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ItemWrap = styled.div`
  font-size: 14px;
  line-height: 18px;
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox']:checked ~ span {
    border: 8px solid #6542f1;
  }
  input[type='checkbox']:checked ~ div {
    font-weight: bold;
  }
  span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
  }
  div {
    display: inline-block;
    vertical-align: middle;
  }
`
