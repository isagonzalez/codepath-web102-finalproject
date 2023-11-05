import React, { useState, useEffect } from 'react'
import { Link, useRoutes } from 'react-router-dom'
// import supabase from './client'
import './App.css'
import Post from './components/Post.jsx'
// Import the read, create and edit pages


const App = () => {
  return (
    <>
      <div>
        <span className="material-symbols-rounded">
          refresh
        </span>
        <h1>nav bar</h1>
        <h2>page</h2>

        <p>Testing Post UI</p>
        <Post />
      </div>
    </>
  )
}

export default App
