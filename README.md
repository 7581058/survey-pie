## survey-pie

### Stack

전역 상태 관리: recoil  
api연동: axios
라우팅: react-router  
스타일링: styled-components  
데이터 불변성 유지: immer

</br>

## 아키텍쳐

![ar](/screen/service.png)

</br>

## 디자인 가이드

![ar](/screen/designguide.png)

</br>

## 스토리보드 정리

### 객관식 설문 조사 화면

`설문 조사 진행 상태바`  
-문항수 만큼 막대 표시  
-답변 완료한 문항과 현재 진행 중인 문항에는 서로 다른 색으로 구분  
-숫자로 현재 진행상황 함께 표시

`질문내용`  
-질문 내용 표시  
-질문 앞에 항상 "Q." 표시

`질문 설명`  
-질문에 대한 상세 설명  
-질문 설명이 없을 경우 표시하지 않음

`객관식 항목`  
-등록된 객관식 항목 나열  
-선택 시, 체크 표시  
-다시 선택 시, 체크 해제  
-중복 선택이 불가능한 경우, 이미 선택된 항목이 있더라도 다른 항목을 선택하면 체크 표시 변경  
-중복 선택이 가능한 경우, 최대 선택 가능 개수만큼 선택 됐다면, 다른 항목을 선택하더라도 변화 없음  
-객관식 옵션

- 최대 선택 가능 개수: 항목을 중복 선택할 수 있는 최대 개수 (기본 값: 1)
- 필수 여부: 입력 없이 넘어가도 되는지에 대한 여부

`다음 버튼`  
-클릭 시, 다음 설문 내용으로 이동  
-다음 문항이 있을 때에만 노출

---

### 단답식 설문 조사 화면

`단답식 입력 항목`  
-개행이 없으며, 한 줄로 입력되는 항목  
-단답식 옵션:

- 입력 글자 제한: 답변에 대한 글자 수 제한 개수(0은 제한 없음)
- Placeholder: 입력 박스에 입력 전, 안내 문구
- 필수 여부: 입력 없이 넘어가도 되는지에 대한 여부

`이전 버튼`  
-클릭 시, 이전 문항으로 이동  
-이전 문항이 있을 때에만 노출

---

### 서술식 설문 조사 화면

`서술식 입력 항목`  
-개행이 가능하며, 여러 줄로 긴 답변을 입력받는 항목  
-크기 조정 불가능 (여러줄로 늘어날 시, 내부 스크롤)  
-서술식 옵션:

- 입력 글자 제한: 답변에 대한 글자 수 제한 개수 (0은 제한 없음)
- Placeholder: 입력 박스에 입련 전, 안내 문구
- 필수 여부: 입력 없이 넘어가도 되는지에 대한 여부

`제출 버튼`  
-클릭 시, 지금까지 작성한 답변들을 저장하고, 완료 페이지로 이동  
-마지막 문항에서만 노출

---

### 설문 완료 화면

`재설문 버튼`  
-클릭 시, 모든 답변이 초기화 된 채로 처음 문항으로 이동

`안내 문구`  
-설문이 완료되었습니다.

</br>

## 데이터 정의

### 설문조사 데이터 (각 질문 데이터, 고유 번호, 생성 날짜)

```
"surveys": [
{
      "id": 1,
      "title": "명절 선물 선호도 조사",
      "questions": [],
      "createdAt": 1647160914620
    },
]
```

### 질문 데이터 (질문 내용, 설명, 필수 여부, 옵션)

```
{
          "title": "설날에 받고 싶은 선물은 무엇인가요? (최대 3개)",
          "desc": "특별히 받고 싶은 선물이 없다면 선택하지 말고 넘어가세요.",
          "type": "select",
          "required": false,
          "options": {
            "max": 3,
            "items": [
              "식품",
              "전자기기",
              "도서",
              "의류",
              "돈"
            ]
          }
        },
        {
          "title": "추석에 받고 싶은 선물은 무엇인가요?",
          "desc": "특별히 받고 싶은 선물이 없다면 입력하지 말고 넘어가세요.",
          "type": "text",
          "required": false,
          "options": {
            "max": 10,
            "placeholder": "10자 이내로 입력해주세요."
          }
        },
        {
          "title": "입력한 선물을 받고 싶은 이유가 무엇인가요? (필수)",
          "desc": "",
          "type": "textarea",
          "required": true,
          "options": {
            "max": 100,
            "placeholder": "100자 이내로 입력해주세요."
          }
        }
```

### 응답 데이터

```
"answers": [
    {
      "surveyId": 1,
      "data": [[0],"단답","서술"],
      "id": 1
    },
    {
      "surveyId": 2,
      "data": [[0],[1],[2],[3],[4]],
      "id": 2
    },
]
```

</br>

## 문제 해결

### TextInput

> Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.

React에서 `<input>` 값이 "uncontrolled"에서 "controlled"로 변했을 때 발생  
처음 value={undefined}였다가 나중에 value="something"처럼 변할 때 발생

이유:

```javascript
export const answersAtom = atom({
  key: 'answersAtom',
  default: [],
})
```

에서 처음 default 빈배열에서 input 입력시 answer 값이 변하기 때문

해결:  
TextInput 컴포넌트에서 answer props에 기본값 지정

```javascript
const TextInput = ({ answer = '', setAnswer, options })
```

참고:  
useState(undefined) 대신 useState("")처럼 초기값을 명확히 설정하면 문제 해결!

다른방법1  
defaultValue를 사용해서 Uncontrolled 방식 유지하기

```javascript
return <input defaultValue="초기값" />
```

다른방법2  
value가 undefined일 때 빈 문자열로 처리하기

```html
<input value={text || ''} onChange={(e) => setText(e.target.value)} />
```

</br>

### styled components prop

> styled-components: it looks like an unknown prop "styletype" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via <StyleSheetManager shouldForwardProp={...}> (connect an API like @emotion/is-prop-valid) or consider using transient props ($ prefix for automatic filtering.) Error Component Stack

styled-components에서 정의한 커스텀 prop (styletype)이 DOM 요소로 전달되면서 발생하는 문제  
prop이 div나 span 같은 기본 태그로 전달되면 React가 알 수 없는 prop이 전달되었다고 경고하는 것

이유: styletype prop 때문

```html
 <Button
  styletype="SECONDARY"
  onClick={() => navigate(`${step - 1}`)}>
  이전
</Button>
```

해결: StyleSheetManager 사용

> React 18+에서는 StyleSheetManager를 사용해 특정 props가 DOM으로 전달되지 않도록 설정할 수 있음

```
npm install @emotion/is-prop-valid
```

설치 후 적용

```html
 <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ActionButtonsWrap>
        {step === 0 || (
          <Button
            styletype="SECONDARY"
            onClick={() => navigate(`${step - 1}`)}>
            이전
          </Button>
        )}
```

isPropValid를 이용하면 HTML 태그에 전달될 수 없는 속성을 자동으로 필터링해줌

참고:

다른방법1  
`$(Transient Props)` 사용하기  
styled-components에서는 $로 시작하는 prop은 자동으로 DOM에 전달되지 않음

```javascript
const Button =
  styled.button <
  {
    $styletype: 'PRIMARY' | 'SECONDARY' | 'TERTIARY',
  } >
  `
  width: 200px;
  padding: 16px 24px;
  border-radius: 4px;
  background-color: ${({ $styletype }) =>
    buttonStyles[$styletype].DEFAULT.BACKGROUND || '#fff'};
  color: ${({ $styletype }) =>
    buttonStyles[$styletype].DEFAULT.COLOR || '#000'};
  border: none;
`

// 사용
;<Button $styletype="SECONDARY" onClick={() => navigate(`${step - 1}`)}>
  이전
</Button>
```

다른방법2  
as="div" 속성으로 기본 태그 방지하기

```javascript
const StyledDiv = styled.div.attrs({ as: 'section' })`
  color: ${(props) => (props.styletype === 'primary' ? 'blue' : 'gray')};
`
;<StyledDiv styletype="primary">Hello</StyledDiv>
```

</br>

### answer 타입

question box 에서 body로

```javascript
  const [answer, setAnswer] = useCurrentAnswer()
<Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
```

body에서 input으로 answer가 내려가는데

```javascript
return (
  <BodyWrap>
    {InputComponent && (
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    )}
  </BodyWrap>
)
```

answer 타입이 textinput 에선 string select에선 배열이라
유니온타입으로 하면 string에선 filter를 할 수 없어 select 컴포넌트 filter 로직 에서 문제가 생김

해결: 제네릭 적용

```javascript
export interface AnswerProps<T> {
  answer: T
  setAnswer: (newAnswer: T) => void
  options?: QuestionOptionsType | null
}
```

적용: 각각의 컴포넌트에서 명확하게 적용

```javascript
const TextInput = ({
  answer = '',
  setAnswer,
  options,
}: AnswerProps<string>)
```

```javascript
const SelectInput = ({
  answer = [],
  setAnswer,
  options,
}: AnswerProps<number[]>) =>
```

장점:  
컴포넌트가 사용하는 타입을 명확하게 정의할 수 있음
string과 number[]를 혼용하지 않도록 타입 안정성이 강화됨
확장성이 좋아져 다른 타입이 추가되더라도 유연하게 대응 가능

추가로: return 이 튜플일때 타입 지정

```javascript
export const useCurrentAnswer = (): [
  AnswerDataType[] | string,
  (newAnswer: AnswerDataType[] | string) => void,
] => {
  const [answers, setAnswers] = useRecoilState(answersAtom)
  ....
  return [answer, setAnswer]
}
```

</br>

### 반복문 안에서 훅 사용

> React Hook "useRecoilValue" may be executed more than once. Possibly because it is called in a loop. React Hooks must be called in the exact same order in every component render.eslint

for문 안에서 useRecoilValue와 같은 hook을 사용하면 React에서 조건부나 반복문 내에서 hooks를 호출하는 문제를 발생시킬 수 있습니다. React hooks는 렌더링 시마다 같은 순서로 호출되어야 하는 규칙이 있기 때문에, for문 안에서 useRecoilValue가 호출되는 것은 문제가 됩니다.

```javascript
const ProgressIndicator = () => {
  const length = useRecoilValue(questionsLengthSelector)
  const [answers] = useAnswers()
  const step = useStep()

  const bars = []
  for (let i = 0; i < length; i++) {
    let status: StatusType = 'pending'
    if (i === step) {
      status = 'in-progress'
    } else if (answers[i]) {
      status = 'done'
    }
    bars.push(<ProgressBar key={i} status={status} />)
  }

  return (
    <ProgressWrap>
      {bars}
      <Counter>
        <span>{step + 1}</span>/{length}
      </Counter>
    </ProgressWrap>
  )
}
```

해결 방법:
for문 밖에서 상태를 미리 가져오고, bars 배열은 상태를 기반으로 렌더링만 처리하도록 수정하면 됩니다.

```javascript
const ProgressIndicator = () => {
  const length = useRecoilValue(questionsLengthSelector)
  const [answers] = useAnswers()
  const step = useStep()

  // `bars` 배열을 만들어서 상태에 맞는 값을 미리 계산
  const bars = Array.from({ length }, (_, i) => {
    let status: StatusType = 'pending'
    if (i === step) {
      status = 'in-progress'
    } else if (answers[i]) {
      status = 'done'
    }
    return <ProgressBar key={i} status={status} />
  })

  return (
    <ProgressWrap>
      {bars}
      <Counter>
        <span>{step + 1}</span>/{length}
      </Counter>
    </ProgressWrap>
  )
}
```

이렇게 Array.from을 사용하여 bars를 배열로 생성하면, for문 안에서 hook을 호출하지 않고도 상태를 기반으로 ProgressBar 컴포넌트를 렌더링할 수 있습니다. 이렇게 변경하면, useRecoilValue는 반복문 내에서 호출되지 않으므로 React의 hook 규칙을 따를 수 있습니다.

</br>

### answer 타입 모호함

현재 프로젝트에서 각각의 설문조사 폼에서  
각폼의 값 answer를 합쳐 answers 로 post를 하는데
이때 각 폼은 textinput, textarea, checkbox 가 있고  
각각 answer타입이 string, string, number[] 이다 보니
answer를 유니온 타입으로 처음 지정했다가  
각 폼마다 타입이 강제되지 않아 아무쪼록 모호해짐  
그래서 타입을 강제하도록 변경함

```javascript
//기존
export type AnswerDataType = number[] | string */
//변경
export type AnswerDataType =
  | { type: 'text'; value: string }
  | { type: 'textarea'; value: string }
  | { type: 'checkbox'; value: number[] }
```

근데 여기서 제네릭으로 answer를 정의했는데
굳이 필요할까 생각해보면

```javascript
export interface AnswerProps<T extends AnswerDataType> {
  answer: T
  setAnswer: (newAnswer: T) => void
  options?: QuestionOptionsType | null
}
```

`AnswerProps<T extends AnswerDataType>`는 각 input의 answer 타입을 강제하는 역할
AnswerDataType은 부모(QuestionBox)에서 일관된 데이터 구조를 유지하는 역할로  
useCurrentAnswer를 AnswerDataType을 반환하도록 하면, 부모에서 실수로 setAnswer를 잘못 사용할 가능성을 방지할 수 있음

타입을 강제해서 각 input에서 set 할때 타입을 지정해서 set하고  
post를 할때는 value만 추출해서 보내는 것으로 변경

```javascript
//input set
const TextInput = ({
  answer = { type: 'text', value: 'string' },,
  setAnswer,
  options,
}: AnswerProps<{ type: 'text'; value: string }>) => {
  return (
    <TextInputStyle
      type="text"
      value={answer.value}
      onChange={(e) => setAnswer({ type: 'text', value: e.target.value })}
      placeholder={options?.placeholder}
      ...
  )
}
//post 요청
export const postAnswers = (surveyId: number, data: AnswersType) => {
  const transformedData = data.map((answer) => answer.value)
  return mainApi.post('/answers', { surveyId, answers: transformedData })
}
```

그리고 Body제네릭이 extends를 하는 이유는

```javascript
const Body = <T extends AnswerDataType>({})
```

T를 AnswerDataType의 서브타입으로 제한하는 것으로  
answer가 AnswerDataType의 일부가 아닌 값이 올 수도 있기때문
