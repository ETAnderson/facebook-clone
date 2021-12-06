import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase'
import { collection, addDoc, Timestamp } from "firebase/firestore";




function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] =  useState('');
    // eslint-disable-next-line
    const  [{ user }, dispatch] = useStateValue();


    const handleSubmit = e => {
        e.preventDefault();

        // some clever db stuff
        // eslint-disable-next-line
        const docRef = addDoc(collection(db, 'posts'), {
            message: input,
            timestamp: Timestamp.now(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,

        });
        
        setInput('');
        setImageUrl('');
    };

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                        className='messageSender__input'
                        placeholder={`What's on your mind, ${user.displayName} ?`} />
                    <input 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Opitional)" />
                    <button onClick={handleSubmit} type="submit">
                        Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/ Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
