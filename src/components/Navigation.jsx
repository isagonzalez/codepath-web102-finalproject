import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <div className="Navigation">
                <nav className="navbar">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="navbar-logo">
                        <h1>Code<span className="logo">Query</span></h1>
                        </div>
                    </Link>

                    <div className="search-bar">
                        <input type="text" placeholder="Search..."/>
                    </div>

                    <div className="navbar-buttons">
                        <a className='log-in' href="#">Log In</a>
                        <a className='sign-up' href="#">Sign Up</a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navigation