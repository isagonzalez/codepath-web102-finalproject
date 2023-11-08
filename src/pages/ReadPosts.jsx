import './ReadPosts.css'
import Post from '../components/Post.jsx'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.posts);
    }, [props]);

    return (
        <>
            <div>
                <div className="top-page">
                    <h1>Questions</h1>
                    <Link to="/new"><button className='new-post'>Ask Question</button></Link>
                </div>
                
                {
                    posts && posts.length > 0 ? 
                    posts.map((post) => 
                        <Post key={post.id} id={post.id} created_at={post.created_at} name={post.name} question={post.question} description={post.description} answer_count={post.answer_count} view_count={post.view_count} vote_count={post.vote_count}/>
                    )
                    : <h2>{"No Questions Yet"}</h2>
                }
            </div>
        </>
    )
}

export default ReadPosts