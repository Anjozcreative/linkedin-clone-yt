import React, { useState } from 'react'
import "./Login.css"
import img1 from "./linkedin.png";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const auth = getAuth();
  
  const loginToApp = (e) => {

      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userCred = userCredential.user;
        dispatch(login({
          email: userCred.email,
          uid: userCred.uid,
          displayName: userCred.displayName,
          profileUrl: userCred.photoURL
        }))
      }).catch(error => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter your full name");
    }
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Get the user from the UserCredential
      const userCred = userCredential.user;

      //Update the user profile
      updateProfile(userCred, {
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          //Dispatch the user info into redux
          dispatch(
            login({
            email: userCred.email,
            uid: userCred.uid,
            displayName: name,
            photoURL: profilePic
          })
          );
        })
        .catch(error => alert(error));
    })
    .catch(error => alert(error));
  };

  return (
    <div className='login'>
      <img src={img1} alt="linkedin_logo" />

      <form action="">
        <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name [required if registering]' type="text" />

        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile pic url [optional]' type="text" />

        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />

        <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="password" />

        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a member?{" "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>

    </div>
  )
}

export default Login;