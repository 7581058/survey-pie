import { useRecoilValue } from 'recoil'

import { answersAtom } from '../stores/answers/atom'

export const useAnswers = () => {
  return useRecoilValue(answersAtom)
}
