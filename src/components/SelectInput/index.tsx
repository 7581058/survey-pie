import React from 'react'
import styled from 'styled-components'

import { AnswerProps } from '../../types'

interface SelectItemProps {
  children: React.ReactNode
  onChange: React.ChangeEventHandler<HTMLInputElement>
  checked: boolean
}
const SelectItem = ({ children, onChange, checked }: SelectItemProps) => {
  return (
    <ItemWrap>
      <label>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrap>
  )
}
const SelectInput = ({
  answer = [],
  setAnswer,
  options,
}: AnswerProps<number[]>) => {
  const handleChange = (isChecked: boolean, index: number) => {
    if (isChecked) {
      const max = options?.max ?? 1
      if (answer.length >= max) return
      setAnswer([...answer, index])
    } else {
      setAnswer(answer.filter((item: number) => item !== index))
    }
  }
  return (
    <SelectInputWrap>
      {options?.items?.map((item, index) => {
        return (
          <SelectItem
            key={index}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.checked, index)
            }
            checked={answer.includes(index)}
          >
            {item}
          </SelectItem>
        )
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
