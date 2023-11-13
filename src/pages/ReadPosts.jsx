import './ReadPosts.css'
import Post from '../components/Post.jsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { set } from 'date-fns'
import '../components/Navigation.css'

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        setPosts(props.posts);
        setFilteredResults(props.posts);
    }, [props]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);

        let newList = [];

        if (posts) {
            newList = posts;
            
            if (searchValue !== "" && searchValue !== null) {
                newList = newList.filter((item) => {
                    const lc = item.question.toLowerCase();
                    const filter = searchValue.toLowerCase();
                    return lc.includes(filter);
                });
            }
        }

        setFilteredResults(newList);
    }

    return (
        <>
            <div>
                <nav className="navbar">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="navbar-logo">
                        <h1>Code<span className="logo">Query</span></h1>
                        </div>
                    </Link>

                    <div className="search-bar">
                        <input type="text" 
                               placeholder="Search..." 
                               onChange={(inputString) => searchItems(inputString.target.value)}/>
                    </div>

                    <div className="navbar-buttons">
                        <a className='log-in' href="#">Log In</a>
                        <a className='sign-up' href="#">Sign Up</a>
                    </div>
                </nav>

                <div className="top-page">
                    <h1>Questions</h1>
                    <Link to="/new"><button className='new-post'>Ask Question</button></Link>
                </div>
                
                {
                    filteredResults && filteredResults.length > 0 ? 
                    filteredResults.map((post) => 
                        <Post key={post.id} id={post.id} created_at={post.created_at} name={post.name} question={post.question} description={post.description} answer_count={post.answer_count} view_count={post.view_count} vote_count={post.vote_count}/>
                    )
                    : <h2>{"No Questions Yet"}</h2>
                }
            </div>
        </>
    )
}

export default ReadPosts