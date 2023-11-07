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
        {/* NAVIGATION */}
        <nav className="navbar">
          <div className="navbar-logo">
            <img src="path-to-logo.png" alt="Logo"/>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search..."/>
          </div>

          <div className="navbar-buttons">
            <a className='log-in' href="#">Log In</a>
            <a className='sign-up' href="#">Sign Up</a>
          </div>
        </nav>

        {/* POSTS */}
        <div className="top-page">
          <h1>Questions</h1>
          <button className='new-post'>Ask Question</button>
        </div>
        <Post />
      </div>
    </>
  )
}

export default App
