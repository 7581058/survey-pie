interface QustionOptionsType {
  selectMax?: number
  inputMin?: number
  placeholder?: string
}

export type QuestionInputType = 'select' | 'text' | 'textarea'

export interface QuestionType {
  title: string
  description: string
  type: QuestionInputType
  required: boolean
  options: QustionOptionsType | null
}

export const questions: QuestionType[] = [
  {
    title: '질문1',
    description: '설명1',
    type: 'text',
    required: false,
    options: {},
  },
  {
    title: '질문2',
    description: '설명2',
    type: 'text',
    required: false,
    options: {},
  },
  {
    title: '질문3',
    description: '설명3',
    type: 'text',
    required: false,
    options: {},
  },
]
