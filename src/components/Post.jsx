import './Post.css'
import { formatDistanceToNow } from 'date-fns';

const Post = (props) => {
    const getPostTime = (time) => {
        const timeAgo = formatDistanceToNow(new Date(time), { addSuffix: true });
        return timeAgo;
    }

    return (
        <>
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
                        <div className="stat-card votes">
                            <span className="material-symbols-rounded">thumb_up</span>
                            <p>{props.vote_count} votes</p>
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
        </>
    )
}

export default Post
