import { useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { useStep } from '../../hooks/useStep'
import { questionsLengthSelector } from '../../stores/questions/questionsLengthSelector'
import Button from '../Button'

const ActionButtons = () => {
  const navigate = useNavigate()
  const questionsLength = useRecoilValue(questionsLengthSelector)
  const step = useStep()
  const isLast = questionsLength - 1 === step

  return (
    <ActionButtonsWrap>
      {step === 0 || (
        <Button styletype="SECONDARY" onClick={() => navigate(`${step - 1}`)}>
          이전
        </Button>
      )}
      {isLast ? (
        <Button styletype="PRIMARY" onClick={() => navigate('/done')}>
          제출
        </Button>
      ) : (
        <Button styletype="PRIMARY" onClick={() => navigate(`${step + 1}`)}>
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
