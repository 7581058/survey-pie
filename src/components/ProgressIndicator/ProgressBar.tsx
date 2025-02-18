import styled from 'styled-components'

export type StatusType = 'pending' | 'in-progress' | 'done'

interface ProgressBarProps {
  status: StatusType
}

const ProgressBar = ({ status }: ProgressBarProps) => {
  return <BarWrap status={status}></BarWrap>
}

export default ProgressBar

const BarWrap = styled.div<{ status: StatusType }>`
  width: 120px;
  height: 8px;
  border-radius: 16px;
  background-color: ${(props) => {
    switch (props.status) {
      case 'pending':
        return '#e3e2e7'
      case 'in-progress':
        return '#6542f1'
      case 'done':
        return '#baa9ff'
      default:
        return '#e3e2e7'
    }
  }};
`
