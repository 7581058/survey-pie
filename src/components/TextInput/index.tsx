import { AnswerProps } from '../QuestionBox'

const TextInput = ({ answer, setAnswer }: AnswerProps) => {
  return (
    <input
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value)
      }}
    />
  )
}

export default TextInput
