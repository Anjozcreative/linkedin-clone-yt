import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from './Login';
import { useEffect } from 'react';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import Widgets from './Widgets';


function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth()
      auth.onAuthStateChanged((user) => {
        if(user){
          //loggedin
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              displayName: user.displayName,
              photoUrl: user.photoURL,
          }))
        } else {
          //loggedout
          dispatch(logout())
        }
      })
  },[]);
  
  return (
    <div className="app">
        <Header />
        {!user ? <Login /> : 
            (
            <div className="app__body">
             <SideBar />
             <Feed />
             <Widgets />
            </div>
            )}
    </div>
  );
}

export default App;
