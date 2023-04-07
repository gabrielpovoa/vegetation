import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import { NotFound } from './components/notFound'

export const Navigation = () => {
  return (
    <Routes>
        <Route  path="/" element={<App />}/>
        <Route  path="*" element={<NotFound />}/>
    </Routes>
  )
}
