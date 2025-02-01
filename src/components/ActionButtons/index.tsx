import { useNavigate } from 'react-router'

import Button from '../Button'
import { StepProps } from '../QuestionBox'

const ActionButtons = ({ questionsLength, step }: StepProps) => {
  const navigate = useNavigate()
  const isLast = questionsLength - 1 === step
  return (
    <div>
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
    </div>
  )
}

export default ActionButtons
