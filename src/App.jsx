import React, { useState, useEffect } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import supabase from './client.js'
import './App.css'
import ReadPosts from './pages/ReadPosts.jsx'
import CreatePost from './pages/CreatePost.jsx'
import EditPost from './pages/EditPost.jsx'
import ViewPost from './pages/ViewPost.jsx'
import CreateComment from './pages/CreateComment.jsx'


const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from('Posts')
        .select()
        setPosts(data);
    }
    
    fetchPosts();
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts posts={posts} />
    },
    {
      path:"/edit/:id/:question",
      element: <EditPost posts={posts} />
    },
    {
      path:"/newPost",
      element: <CreatePost />
    },
    {
      path:"/view/:id/:question",
      element: <ViewPost posts={posts}/>
    },
    {
      path:"/newComment/:id",
      element: <CreateComment />
    }
  ])


  return (
    <>
      <div>
        {element}
      </div>
    </>
  )
}

export default App
