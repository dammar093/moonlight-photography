import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import About from './pages/About.jsx'
import Pricing from './pages/Pricing.jsx'
import { Service } from './pages/Service.jsx'
import Gallery from './pages/Gallery.jsx'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/pricing',
          element: <Pricing />
        },
        {
          path: '/services',
          element: <Service />
        },
        {
          path: 'gallery',
          element: <Gallery />
        }
      ]
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
