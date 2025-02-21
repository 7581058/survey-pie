export type AnswerDataType =
  | { type: 'text'; value: string }
  | { type: 'textarea'; value: string }
  | { type: 'checkbox'; value: number[] }

export type AnswersType = AnswerDataType[]

export interface AnswerType {
  surveyId: number
  data: AnswersType
  id: number
}

export interface AnswerProps<T extends AnswerDataType> {
  answer: T
  setAnswer: (newAnswer: T) => void
  options?: QuestionOptionsType | null
}

export interface QuestionOptionsType {
  max?: number
  min?: number
  placeholder?: string
  items?: string[]
}

export type QuestionInputType = 'select' | 'text' | 'textarea'

export interface QuestionType {
  title: string
  description: string
  type: QuestionInputType
  required: boolean
  options: QuestionOptionsType | null
}
