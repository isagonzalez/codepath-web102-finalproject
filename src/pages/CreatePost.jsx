import React, { useState } from 'react'
import './CreatePost.css'
import supabase from '../client.js'

const CreatePost = () => {
    const createPost = async (e) => {
        e.preventDefault();
        
        await supabase
            .from('Posts')
            .insert({name: post.name, question: post.question, description: post.description})
            .select();
        
        window.location = '/';
    }

    const [post, setPost] = useState({
        name: '',
        question: '',
        description: '',
    });

    const hangdleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <>
            <div className='main-page'>
                <h1>Ask a Question</h1>
                <form>
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" id="name" name="name" placeholder='anonymous' onChange={hangdleChange}/><br/>
                    <br/>

                    <label htmlFor="question"><span className='required'>*</span> Question</label><br/>
                    <textarea id="question" name="question" required onChange={hangdleChange}></textarea><br/>
                    <br/>

                    <label htmlFor="description"><span className='required'>*</span> Description</label><br/>
                    <textarea id="description" name="description" required onChange={hangdleChange}></textarea><br/>
                    <br/>

                    <input type="submit" value="Submit" onClick={createPost}/>
                </form>
            </div>
        </>
    )
}

export default CreatePost