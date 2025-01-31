import { useNavigate } from 'react-router'

import { StepProps } from '../QuestionBox'

const ActionButtons = ({ questionsLength, step }: StepProps) => {
  const navigate = useNavigate()
  const isLast = questionsLength - 1 === step
  return (
    <div>
      {step === 0 || (
        <button onClick={() => navigate(`${step - 1}`)}>이전</button>
      )}
      {isLast ? (
        <button onClick={() => navigate('/done')}>제출</button>
      ) : (
        <button onClick={() => navigate(`${step + 1}`)}>다음</button>
      )}
    </div>
  )
}

export default ActionButtons
