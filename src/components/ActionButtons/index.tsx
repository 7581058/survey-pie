import isPropValid from '@emotion/is-prop-valid'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'
import styled, { StyleSheetManager } from 'styled-components'

import { useAnswers } from '../../hooks/useAnswers'
import { useRequiredOption } from '../../hooks/useRequiredOption'
import { useStep } from '../../hooks/useStep'
import { useSurveyId } from '../../hooks/useSurveyId'
import { postAnswers } from '../../services/apis'
import { questionsLengthSelector } from '../../stores/questions/questionsLengthSelector'
import Button from '../Button'

const ActionButtons = () => {
  const step = useStep()
  const surveyId = useSurveyId()
  const navigate = useNavigate()
  const [answers, setAnswers] = useAnswers()
  const questionsLength = useRecoilValue(questionsLengthSelector)
  const [isLoading, setIsLoading] = useState(false)
  const isLast = questionsLength - 1 === step
  const isRequired = useRequiredOption()
  const isblockToNext = isRequired ? !answers[step]?.value?.length : false
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ActionButtonsWrap>
        {step === 0 || (
          <Button styletype="SECONDARY" onClick={() => navigate(`${step - 1}`)}>
            이전
          </Button>
        )}
        {isLast ? (
          <Button
            styletype="PRIMARY"
            onClick={() => {
              setIsLoading(true)
              postAnswers(surveyId, answers)
                .then(() => {
                  setAnswers([])
                  navigate(`/done/${surveyId}`)
                })
                .catch((err) => {
                  console.log(err.response)
                  alert('응답 제출에 실패했습니다. 다시 시도해주세요.')
                  setIsLoading(false)
                })
            }}
            disabled={isLoading || isblockToNext}
          >
            {isLoading ? '제출 중입니다...' : '제출'}
          </Button>
        ) : (
          <Button
            styletype="PRIMARY"
            onClick={() => navigate(`${step + 1}`)}
            disabled={isblockToNext}
          >
            다음
          </Button>
        )}
      </ActionButtonsWrap>
    </StyleSheetManager>
  )
}

export default ActionButtons

const ActionButtonsWrap = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`
