import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic='https://avatars.githubusercontent.com/u/2357717?v=4'
                message='Wow this works!'
                timestamp='This is a timestamp'
                username='etanderson'
                image='https://upload.wikimedia.org/wikipedia/commons/4/47/Environmental_disaster_in_Levikha_Village%2C_Sverdlovsk_region_of_Russia_DJI.jpg'
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
