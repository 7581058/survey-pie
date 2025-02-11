import { useRecoilState } from 'recoil'

import { answersAtom } from '../stores/answers/atom'
import { useStep } from './useStep'

export const useCurrentAnswer = () => {
  const [answers, setAnswers] = useRecoilState(answersAtom)
  const step = useStep()

  const answer = answers[step]
  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers]
      newAnswers[step] = newAnswer
      return newAnswers
    })
  }
  return [answer, setAnswer]
}
