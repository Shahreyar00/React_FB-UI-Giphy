import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import "./login.scss";
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';

const Login = () => {
    const [ state, dispatch ] = useStateValue();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider).then((result)=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        });
    };

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginTop">
                    <FaFacebook className="loginLogo" />
                </div>
                <div className="loginBottom">
                    <button
                        className="loginBtn"
                        onClick={signInWithGoogle}
                    >
                        SIGN IN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login