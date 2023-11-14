import './Comment.css'
import { formatDistanceToNow } from 'date-fns'

const Comment = (props) => {

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
        <div className="Comment">
            <p className='username'>{props.name}<span className="time-ago"> • {getPostTime(props.created_at)}</span></p>
            <p className='content'>{props.content}</p>
        </div>
    )
}

export default Comment