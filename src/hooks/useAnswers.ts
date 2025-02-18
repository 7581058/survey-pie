import { useRecoilState } from 'recoil'

import { answersAtom } from '../stores/answers/atom'

export const useAnswers = () => {
  return useRecoilState(answersAtom)
}
