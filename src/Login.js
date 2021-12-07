import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { signInWithPopup } from '@firebase/auth';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    // eslint-disable-next-line
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // fancy sign in...
        signInWithPopup(auth, provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user)
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
                <h1>Clone</h1>
                <h2>For Demonstration Purposes</h2>
            </div>
            <Button type="submit" onClick={signIn} >
                Sign In
            </Button>
        </div>
    )
}

export default Login 
