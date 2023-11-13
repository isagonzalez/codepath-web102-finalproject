import './EditPost.css'
import supabase from '../client'
import Navigation from '../components/Navigation'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = (props) => {
    const { id, question } = useParams();
    const post = props.posts.filter(item => item.id == id)[0];
    const [updatedPost, setUpdatedPost] = useState(post);

    const updatePost = async (e) => {
        e.preventDefault();

        await supabase
            .from('Posts')
            .update({name: updatedPost.name, question: updatedPost.question, description: updatedPost.description})
            .eq('id', id)
        
        window.location = '/';
    }

    const deletePost = async (e) => {
        e.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id)

        window.location = "/";
    }

    const handleChange = (e) => {
        setUpdatedPost(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <>
                <div className='EditPost'>
                <Navigation />

                <div className='main-page'>

                    <h1>Edit the Question</h1>
                    <form>
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" id="name" name="name" placeholder='anonymous' value={updatedPost.name} onChange={handleChange}/><br/>
                        <br/>

                        <label htmlFor="question"><span className='required'>*</span> Question</label><br/>
                        <textarea id="question" name="question" required  value={updatedPost.question} onChange={handleChange}></textarea><br/>
                        <br/>

                        <label htmlFor="description"><span className='required'>*</span> Description</label><br/>
                        <textarea id="description" name="description" required  value={updatedPost.description} onChange={handleChange}></textarea><br/>
                        <br/>

                        <div className="buttons">
                            <input type="submit" value="Submit" onClick={updatePost}/>
                            <div className="delete-post" onClick={deletePost}>
                                <span className="material-symbols-rounded">delete</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditPost