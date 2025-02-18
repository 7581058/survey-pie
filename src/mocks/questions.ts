import { QuestionType } from './../types/index'

export const questions: QuestionType[] = [
  {
    title: '질문1',
    description: '설명1',
    type: 'text',
    required: false,
    options: {
      placeholder: 'placeholder',
    },
  },
  {
    title: '질문2',
    description: '설명2',
    type: 'textarea',
    required: false,
    options: {
      placeholder: 'placeholder',
    },
  },
  {
    title: '질문3',
    description: '설명3',
    type: 'select',
    required: false,
    options: {
      items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
    },
  },
]
