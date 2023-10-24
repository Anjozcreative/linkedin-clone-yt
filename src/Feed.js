import React, { useEffect, useState } from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import { Image } from '@mui/icons-material';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore';
import {db} from './Firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);
  const [trigger, setTrigger] = useState(false);


  //get the data from input and store data
      const sendInput = async (e) => {
        e.preventDefault();
        setTrigger(true);

        const docRef = await addDoc(collection(db, "posts"), {
          name: user.displayName,
          description: user.email,
          message: input,
          photoUrl: user.photoUrl || " ",
          timestamp: serverTimestamp(),
      });
        console.log("Document written with ID: ", docRef.id);
        
        setInput(" ");
    }

          //get the data from the database and place it in the usestate(post)
          const docRef = collection(db,"posts")
          const q = query(docRef, orderBy("timestamp", "desc"));

          const fetchPost = async () => {
            await getDocs(q)
            .then((querySnapshot) => {
              const newData = querySnapshot.docs
              .map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }));
              setPost(newData);
              console.log(post, newData);
            })
          }
          useEffect(() => {
            setTrigger(false);
            fetchPost();
          }, [trigger]);

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} type="text" onChange={(e)=>setInput(e.target.value)} />
                    <button type='submit' onClick={sendInput}>Send</button>
                </form>
            </div>
              <div className="feed__inputOption">
              <InputOption title="Photo" Icon={Image} color="#7085f9"/>
              <InputOption title="Video" Icon={SubscriptionsIcon} color="#e7a33e"/>
              <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd"/>
              <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7fc15e"/>
          </div>
        </div>
      {/* render the post */}
      <FlipMove>

      {post.map(({ id, data: { name, description, message, photoUrl } })=>(
            <Post 
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />

            ))}

      </FlipMove>
    </div>
  )
};

export default Feed;