import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { useAnswers } from '../../hooks/useAnswers'
import { useStep } from '../../hooks/useStep'
import { questionsLengthSelector } from '../../stores/questions/questionsLengthSelector'
import ProgressBar, { StatusType } from './ProgressBar'

const ProgressIndicator = () => {
  const length = useRecoilValue(questionsLengthSelector)
  const [answers] = useAnswers()
  const step = useStep()

  const bars = Array.from({ length }, (_, i) => {
    let status: StatusType = 'pending'
    if (i === step) {
      status = 'in-progress'
    } else if (answers[i]) {
      status = 'done'
    }
    return <ProgressBar key={i} status={status} />
  })

  return (
    <ProgressWrap>
      {bars}
      <Counter>
        <span>{step + 1}</span>/{length}
      </Counter>
    </ProgressWrap>
  )
}

export default ProgressIndicator

const ProgressWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: calc(100% + 24px);
  width: 100%;
  left: 0;
  gap: 8px;
`

const Counter = styled.div`
  margin-left: 8px;
  color: #636262;
  font-size: 16px;
  line-height: 19px;

  span {
    font-weight: bold;
    color: #121111;
  }
`
