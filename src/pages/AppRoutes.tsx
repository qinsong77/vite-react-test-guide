import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '@/pages/App'
import { Counter } from '@/pages/counter/Counter'
import { DynamicForm } from '@/pages/dynamicForm'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="counter" element={<Counter />} />
      <Route path="dynamicForm" element={<DynamicForm />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
