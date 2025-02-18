import { useRecoilState } from 'recoil'

import { answersAtom } from '../stores/answers/atom'
import { AnswerDataType } from '../types'
import { useStep } from './useStep'

export const useCurrentAnswer = (): [
  AnswerDataType[] | string,
  (newAnswer: AnswerDataType[] | string) => void,
] => {
  const [answers, setAnswers] = useRecoilState(answersAtom)
  const step = useStep()

  const answer = answers[step]
  const setAnswer = (newAnswer: AnswerDataType[] | string) => {
    setAnswers((answers) => {
      const newAnswers = [...answers]
      newAnswers[step] = newAnswer
      return newAnswers
    })
  }
  return [answer, setAnswer]
}
