import './Post.css'
import { formatDistanceToNow } from 'date-fns';
import supabase from '../client.js'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Post = (props) => {
    const [votes, setVotes] = useState(props.vote_count);

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
            .match({id: props.id});
    }

    const getLink = () => {
        return props.id + "/" + props.question.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z ]/g, "").toLowerCase().replace(/\s+/g, '-');
    }

    return (
        <>
            <div>
                <Link to={'view/'+ getLink()}  style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className='Post'>
                        <div className="header">
                            <div className="user">
                                {/* <img className="user-picture" src=""/> */}
                                <p className='username'>{props.name}<span className="time-ago"> •   {getPostTime(props.created_at)}</span></p>
                            </div>
                            
                            <span className="material-symbols-rounded">more_horiz</span>
                        </div>

                        <div className="main-content">
                            <div className="question-box">
                                <p className="question">{props.question}</p>
                                <p className='description'>{props.description}</p>
                            </div>

                            <div className="stats">
                                <div className="stat-card votes" onClick={increaseVotes}>
                                    <span className="material-symbols-rounded">thumb_up</span>
                                    <p>{votes} votes</p>
                                </div>

                                <div className="stat-card">
                                    <span className="material-symbols-rounded">forum</span>                    
                                    <p>{props.answer_count} answers</p>
                                </div>

                                <div className="stat-card">
                                    <span className="material-symbols-rounded">visibility</span>
                                    <p>{props.view_count} views</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Post
