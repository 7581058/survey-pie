import styled from 'styled-components'

import ProgressIndicator from '../../components/ProgressIndicator'
import QuestionBox from '../../components/QuestionBox'

const SurveyPage = () => {
  return (
    <SurveyPageWrap>
      <ProgressIndicator />
      <QuestionBox />
    </SurveyPageWrap>
  )
}

export default SurveyPage

const SurveyPageWrap = styled.div`
  width: 100%;
`
