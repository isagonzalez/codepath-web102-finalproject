import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './CreateComment.css'
import supabase from '../client.js'
import Navigation from '../components/Navigation.jsx'

const CreateComment = () => {
    const { id } = useParams();
    console.log(id)

    const createComment = async (e) => {
        e.preventDefault();
        
        await supabase
            .from('Comments')
            .insert({post_id: id, name: comment.name, content: comment.content})
            .select();
        
        window.location = '/';
    }

    const [comment, setComment] = useState({
        name: '',
        content: '',
    });

    const handleChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="CreateComment">
            <Navigation />
            <div className="main-page">
                <h1>Leave a Comment</h1>
                <form>
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" id="name" name="name" placeholder='anonymous' onChange={handleChange}/><br/>
                    <br/>

                    <label htmlFor="content"><span className='required'>*</span> Comment</label><br/>
                    <textarea id="content" name="content" required onChange={handleChange}></textarea><br/>
                    <br/>

                    <input type="submit" value="Submit" onClick={createComment} />
                </form>
            </div>
        </div>
    )
}

export default CreateComment