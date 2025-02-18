import { selector } from 'recoil'

import { getSurvey } from '../../services/apis'

export const questionsSelector = selector({
  key: 'questionsSelector',
  get: async () => {
    const res = await getSurvey(Number(window.location.pathname.split('/')[2]))
    return res.data
  },
})
