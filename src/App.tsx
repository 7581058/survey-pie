import { Route, Routes } from 'react-router'
import styled from 'styled-components'

import CompletionPage from './pages/CompletionPage'
import SurveyPage from './pages/SurveyPage'

function App() {
  return (
    <Container>
      <Box>
        <Routes>
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
          <Route path="/done" element={<CompletionPage />} />
        </Routes>
      </Box>
    </Container>
  )
}

export default App

const Container = styled.div`
  background-color: #f5f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`

const Box = styled.div`
  position: relative;
  background-color: #fff;
  min-height: 500px;
  min-width: 700px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
  padding: 60px;
  display: flex;
  box-sizing: border-box;
`
