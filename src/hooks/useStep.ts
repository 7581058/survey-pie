import { useParams } from 'react-router'
export const useStep = () => {
  const params = useParams()
  const step = Number(params.step)
  return step
}
