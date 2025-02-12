import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { questionsAtom } from '../stores/questions/atom'
import { useStep } from './useStep'
import { useSurveyId } from './useSurveyId'

export const useCurrentQuestion = () => {
  const step = useStep()
  const surveyId = useSurveyId()
  const [surveyData, setSurveyData] = useRecoilState(questionsAtom)
  const questions = surveyData?.questions || []

  useEffect(() => {
    axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
      setSurveyData(res.data)
    })
  }, [setSurveyData, surveyId])
  return questions[step]
}
