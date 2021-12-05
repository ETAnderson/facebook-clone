import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import db from './firebase'

function Feed() {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     db.collection('posts').onSnapshot(snapshot => {
    //         setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.dtat()})))
    //     })
        // return () => {
        //     cleanup
        // }
    // }, [])
    
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            
            {posts.map(post => {
                <Post 
                    key={post.id}
                    profilePic={post.profilePic}
                    message={post.message}
                    timestamp={post.timestamp}
                    username={post.username}
                    image={post.image}
                />
            })}
        </div>
    )
}

export default Feed
