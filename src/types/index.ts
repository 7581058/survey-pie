export type AnswerDataType = number[] | string
export type AnswersType = (string | AnswerDataType[])[]

export interface AnswerType {
  surveyId: number
  data: AnswerDataType[]
  id: number
}

export interface AnswerProps<T> {
  answer: T
  setAnswer: (newAnswer: T) => void
  options?: QustionOptionsType | null
}

export interface QustionOptionsType {
  selectMax?: number
  inputMin?: number
  placeholder?: string
  items?: string[]
}

export type QuestionInputType = 'select' | 'text' | 'textarea'

export interface QuestionType {
  title: string
  description: string
  type: QuestionInputType
  required: boolean
  options: QustionOptionsType | null
}
