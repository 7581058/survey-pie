import { useNavigate } from 'react-router'
import styled from 'styled-components'

import congrats from '../../assets/8.svg'
import reload from '../../assets/Reload.svg'
import Button from '../../components/Button'
import { useSurveyId } from '../../hooks/useSurveyId'

const CompletionPage = () => {
  const surveyId = useSurveyId()
  const navigate = useNavigate()
  return (
    <CompletionPageWrap>
      <CongratsImg src={congrats} alt="" />
      <MidText>설문을 완료했습니다.</MidText>
      <ReloadButton
        styletype="TERTIARY"
        onClick={() => {
          navigate(`/survey/${surveyId}/0`)
        }}
      >
        <ReloadIcon src={reload} alt="" />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageWrap>
  )
}

export default CompletionPage

const CompletionPageWrap = styled.div`
  width: 100%;
  text-align: center;
`

const CongratsImg = styled.img`
  width: 209px;
  height: 204px;
`

const ReloadIcon = styled.img`
  width: 24px;
  height: 24px;
`

const MidText = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 56px;
`

const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`
