import './Post.css'

const Post = () => {
    return (
        <>
            <div className='Post'>
                <div className="header">
                    <div className="user">
                        <img className="user-picture" src=""/>
                        <p className='username'>username • 17 hr ago</p>
                    </div>
                    
                    <span className="material-symbols-rounded">more_horiz</span>
                </div>

                <div className="main-content">
                    <div className="question-box">
                        <p className="question">Question</p>
                        <p className='description'>Descrition</p>
                    </div>

                    <div className="stats">
                        <div className="stat-card votes">
                            <span className="material-symbols-rounded">thumb_up</span>
                            <p># votes</p>
                        </div>

                        <div className="stat-card">
                            <span className="material-symbols-rounded">forum</span>                    
                            <p># answers</p>
                        </div>

                        <div className="stat-card">
                            <span className="material-symbols-rounded">visibility</span>
                            <p># views</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Post
