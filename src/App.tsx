
import { RouterProvider } from 'react-router-dom'
import { createBrowserRoutes } from './routes/Routes'

function App() {
  const router = createBrowserRoutes()
  return <RouterProvider router={router} />
}

export default App
