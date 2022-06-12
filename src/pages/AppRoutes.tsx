import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '@/pages/App'
import { Counter } from '@/pages/counter/Counter'
import { DynamicForm } from '@/pages/dynamicForm'
import { Counter as I18nCounter } from '@/pages/i18nTry/Counter'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}
      />
      <Route
        path="counter"
        element={<Counter />}
      />
      <Route
        path="dynamicForm"
        element={<DynamicForm />}
      />
      <Route
        path="i18nTry"
        element={<I18nCounter />}
      />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
