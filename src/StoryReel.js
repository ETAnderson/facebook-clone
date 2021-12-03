import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/4/45/A_processor_%28Pixabay%29.jpg'
                profileSrc='https://avatars.githubusercontent.com/u/2357717?v=4'
                title='etanderson'
            />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/1/12/A_laptop_on_the_wooden_table_%282%2C_Pixabay%29.jpg'
                profileSrc='https://avatars.githubusercontent.com/u/2357717?v=4'
                title='etanderson'
            />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/3/37/Clouds_on_New_York_%28Tookapic%29.jpg'
                profileSrc='https://avatars.githubusercontent.com/u/2357717?v=4'
                title='etanderson'
            />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/c/c5/Downtown%2C_New_York%2C_United_States_%28Unsplash%29.jpg'
                profileSrc='https://avatars.githubusercontent.com/u/2357717?v=4'
                title='etanderson'
            />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/6/6c/Frosty_pavement_%28Stocksnap%29.jpg'
                profileSrc='https://avatars.githubusercontent.com/u/2357717?v=4'
                title='etanderson'
            />
        </div>
    )
}

export default StoryReel
