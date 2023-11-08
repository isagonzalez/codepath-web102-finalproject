import React, { useState, useEffect } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import supabase from './client.js'
import './App.css'
import ReadPosts from './pages/ReadPosts.jsx'
import CreatePost from './pages/CreatePost.jsx'
import EditPost from './pages/EditPost.jsx'


const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from('Posts')
        .select()
        setPosts(data);
        console.log(data);
    }
    
    fetchPosts();
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts posts={posts} />
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ])


  return (
    <>
      <div>
        {/* NAVIGATION */}
        <nav className="navbar">
          <div className="navbar-logo">
            <h1>Code<span className="logo">Query</span></h1>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search..."/>
          </div>

          <div className="navbar-buttons">
            <a className='log-in' href="#">Log In</a>
            <a className='sign-up' href="#">Sign Up</a>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        {element}
      </div>
    </>
  )
}

export default App
