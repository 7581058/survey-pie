import { atom } from 'recoil'

import { questions } from '../../mocks/questions'

export const questionsAtom = atom({
  key: 'questionsAtom',
  default: questions,
})
