import { Route, Routes } from 'react-router'

import CompletionPage from './pages/CompletionPage'
import SurveyPage from './pages/SurveyPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/survey/:surveyId/:step" element={<SurveyPage />} />
        <Route path="/done" element={<CompletionPage />} />
      </Routes>
    </div>
  )
}

export default App
