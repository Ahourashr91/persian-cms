import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import routes from './routes'
import { useRoutes } from 'react-router-dom'

function App() {
  const projectRoutes = useRoutes(routes)

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        {projectRoutes}
      </div>
    </>
  )
}

export default App
