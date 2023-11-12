import './ViewPost.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../components/Post.jsx'

const ViewPost = (props) => {
    const { id, question } = useParams();
    const post = props.posts.filter(item => item.id == id)[0];


    useEffect(() => {
        console.log("POST")
        console.log(post)
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

    return (
        <>
                <Post key={post.id} id={post.id} created_at={post.created_at} name={post.name} question={post.question} description={post.description} answer_count={post.answer_count} view_count={post.view_count} vote_count={post.vote_count}/>
            <div className='ViewPost'>

                <p className='username'>{post.name}<span className="time-ago"> • {getPostTime(post.created_at)}</span></p>
                <h1>{post.question}</h1>
                <p className='description'>{post.description}</p>

                <div className="cta">
                    <div className="vote">
                        <span className="material-symbols-rounded">thumb_up</span>
                        <p>{post.vote_count}</p>
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
            </div>
        </>
    )
}

export default ViewPost