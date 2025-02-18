import axios from 'axios'

import { AnswersType } from '../types'

export const mainApi = axios.create({
  baseURL: 'http://localhost:3001',
})

//질문 조회
export const getSurvey = (surveyId: number) => {
  return mainApi.get(`/surveys/${surveyId}`)
}

//답변 제출
export const postAnswers = (surveyId: number, data: AnswersType) => {
  return mainApi.post('/answers', { surveyId, data })
}
