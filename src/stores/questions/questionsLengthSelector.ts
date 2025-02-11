import { selector } from 'recoil'

import { questionsAtom } from './atom'

export const questionsLengthSelector = selector({
  key: 'questionsLengthSelector',
  get: ({ get }) => {
    const questions = get(questionsAtom)
    return questions.length
  },
})
