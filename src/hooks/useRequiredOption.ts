import { useCurrentQuestion } from './useCurrentQuestion'

export const useRequiredOption = () => {
  const question = useCurrentQuestion()
  return question?.required || false
}
