import styled from 'styled-components'

interface TitleProps {
  children: React.ReactNode
}
const Title = ({ children }: TitleProps) => {
  return (
    <TitleWrap>
      <span>Q.</span>
      {children}
    </TitleWrap>
  )
}

export default Title

const TitleWrap = styled.h1`
  margin: 0;
  color: #121111;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  span {
    margin-right: 12px;
  }
`
