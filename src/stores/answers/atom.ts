import { atom } from 'recoil'

import { AnswersType } from '../../types'

export const answersAtom = atom<AnswersType>({
  key: 'answersAtom',
  default: [],
})
