import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { signInWithPopup } from '@firebase/auth';

function Login() {
    const signIn = () => {
        // fancy sign in...
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user);
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className='login__logo'>
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg'
                    alt=''
                />
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg'
                    alt=''
                />
            </div>
            <Button type="submit" onClick={signIn} >
                Sign In
            </Button>
        </div>
    )
}

export default Login 
