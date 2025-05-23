import './ViewPost.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navigation from '../components/Navigation.jsx'
import { set } from 'date-fns'
import supabase from '../client.js'
import { formatDistanceToNow } from 'date-fns'
import { Link } from 'react-router-dom'
import Comment from '../components/Comment.jsx'

const ViewPost = (props) => {
    const { id, question } = useParams();
    const post = props.posts.filter(item => item.id == id)[0];
    const [votes, setVotes] = useState(post.vote_count);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        console.log("POST")
        console.log(post)
        console.log("VOTES")
        console.log(votes)
        console.log("FETCH COMMENTS")

        const fetchComments = async () => {
            const { data } = await supabase
              .from('Comments')
              .select()
              .eq('post_id', id)
              setComments(data);
          }
          
        fetchComments();
    }, []);
    
    const getPostTime = (time) => {
        const date = new Date(time);
        const now = new Date();
        const diff = now - date; // in milliseconds

        if (diff > (2*24*60*60*1000)) {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
            const day = date.getDate();
            const month = months[date.getMonth() - 1];
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'pm' : 'am';
            const formattedHours = hours % 12;
            const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
            const yearFormat = date.getFullYear() !== now.getFullYear() ? `, ${year}` : '';

            return `${month} ${day}${yearFormat} at ${formattedHours}:${formattedMinutes} ${ampm}`;
        } 
        else {
            const timeAgo = formatDistanceToNow(new Date(time), { addSuffix: true });
            return timeAgo;
        }
    }

    const increaseVotes = async () => {
        setVotes(votes + 1);
        await supabase
            .from('Posts')
            .update({vote_count: votes + 1})
            .match({id: post.id});
    }

    return (
        <>
            <div className='ViewPost'>
                <Navigation />

                <div className="main-content">
                    <p className='username'>{post.name}<span className="time-ago"> • {getPostTime(post.created_at)}</span></p>
                    <h1 className='question'>{post.question}</h1>
                    <p className='description'>{post.description}</p>

                    <div className="cta">
                        <div className="vote" onClick={increaseVotes}>
                            <span className="material-symbols-rounded">thumb_up</span>
                            <p>{votes}</p>
                        </div>
                        <div className="answers">
                            <span className="material-symbols-rounded">forum</span>
                            <p className='num-answers'>{post.answer_count}</p>
                        </div>
                        <div className="share">
                            <span className="material-symbols-rounded">ios_share</span>
                            <p>Share</p>
                        </div>
                    </div>

                    <div className="comments">
                        <h2>Comments</h2>

                        <div className="add-comment">
                            <span className="material-symbols-rounded">add</span>
                            <Link to={'/newComment/' + id} style={{ textDecoration: 'none', color: 'inherit' }}><button className='new-comment'>Add a comment</button></Link>
                        </div>

                        {
                            comments && comments.length > 0 ? 
                            comments.map((comment) => 
                                <Comment key={comment.id} id={comment.id} created_at={comment.created_at} name={comment.name} content={comment.content} post_id={comment.post_id}/>
                            )
                            : <h2>{"No Comments Yet"}</h2>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewPost