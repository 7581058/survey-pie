import { useRecoilValue } from 'recoil'

import { questionsAtom } from '../stores/questions/atom'
import { useStep } from './useStep'

export const useCurrentQuestion = () => {
  const step = useStep()
  const questions = useRecoilValue(questionsAtom)
  return questions[step]
}
