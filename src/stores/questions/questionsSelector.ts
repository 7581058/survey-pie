import axios from 'axios'
import { selector } from 'recoil'

export const questionsSelector = selector({
  key: 'questionsSelector',
  get: async () => {
    const res = await axios.get(
      `http://localhost:3001/surveys/${window.location.pathname.split('/')[2]}`,
    )
    return res.data
  },
})
