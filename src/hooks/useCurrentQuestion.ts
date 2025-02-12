import { useRecoilValue } from 'recoil'

import { questionsSelector } from '../stores/questions/questionsSelector'
import { useStep } from './useStep'

export const useCurrentQuestion = () => {
  const step = useStep()
  const surveyData = useRecoilValue(questionsSelector)
  const questions = surveyData?.questions || []

  return questions[step]
}
