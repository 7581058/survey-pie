import { selector } from 'recoil'

import { questionsSelector } from './questionsSelector'

export const questionsLengthSelector = selector({
  key: 'questionsLengthSelector',
  get: ({ get }) => {
    const questions = get(questionsSelector).questions
    return questions.length
  },
})
