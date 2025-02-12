import { useParams } from 'react-router'
export const useSurveyId = () => {
  const params = useParams()
  const id = Number(params.surveyId)
  return id
}
