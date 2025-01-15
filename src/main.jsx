import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Route.jsx'
import { HelmetProvider } from 'react-helmet-async'
import DataProvider from './Provider/DataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <DataProvider>
        <RouterProvider router={route}></RouterProvider>
      </DataProvider>
    </HelmetProvider>
  </StrictMode>,
)
