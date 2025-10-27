import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App'
import HomePage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, // O layout principal, o elemento pai
    children: [      // Rotas filhas serão renderizadas no <Outlet/>
      {
        index: true, // rota padrão,
        element: <HomePage/>
      },

      {
        path: "login", // Rota /login
        element: <LoginPage/>
      },

      {
        path: "dashboard", // Rota /dashboard
        element: <DashboardPage/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

