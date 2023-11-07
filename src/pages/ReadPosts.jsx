import './ReadPosts.css'
import Post from '../components/Post.jsx'
import { useEffect, useState } from 'react';

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
    }, [props]);

    return (
        <>
            <div>
                <div className="top-page">
                    <h1>Questions</h1>
                    <button className='new-post'>Ask Question</button>
                </div>
                
                {
                    posts && posts.length > 0 ? 
                    posts.map((post, i) => 
                        <Post key={i}/>
                    ) : <h2>{"No Questions Yet"}</h2>
                }
            </div>
        </>
    )
}

export default ReadPosts