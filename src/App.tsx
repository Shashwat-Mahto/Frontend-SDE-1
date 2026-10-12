import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.tsx'
import './App.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/accordion', element: null },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
