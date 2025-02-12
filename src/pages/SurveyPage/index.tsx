import { Suspense } from 'react'
import styled from 'styled-components'

import ProgressIndicator from '../../components/ProgressIndicator'
import QuestionBox from '../../components/QuestionBox'

const SurveyPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SurveyPageWrap>
        <ProgressIndicator />
        <QuestionBox />
      </SurveyPageWrap>
    </Suspense>
  )
}

export default SurveyPage

const SurveyPageWrap = styled.div`
  width: 100%;
`
