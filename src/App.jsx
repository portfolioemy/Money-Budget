/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import {  APIProvider } from './context/ApiContext'
import LoginPage from './Pages/LoginPage'

function App() {

  return (
<APIProvider>
<LoginPage />
</APIProvider>
  )
}

export default App
