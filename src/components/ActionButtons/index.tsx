import { useNavigate } from 'react-router'
import styled from 'styled-components'

import Button from '../Button'
import { StepProps } from '../QuestionBox'

const ActionButtons = ({ questionsLength, step }: StepProps) => {
  const navigate = useNavigate()
  const isLast = questionsLength - 1 === step
  return (
    <ActionButtonsWrap>
      {step === 0 || (
        <Button StyleType="SECONDARY" onClick={() => navigate(`${step - 1}`)}>
          이전
        </Button>
      )}
      {isLast ? (
        <Button StyleType="PRIMARY" onClick={() => navigate('/done')}>
          제출
        </Button>
      ) : (
        <Button StyleType="PRIMARY" onClick={() => navigate(`${step + 1}`)}>
          다음
        </Button>
      )}
    </ActionButtonsWrap>
  )
}

export default ActionButtons

const ActionButtonsWrap = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`
