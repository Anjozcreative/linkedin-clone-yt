import { forwardRef } from "react";
import "./Post.css";
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Post = forwardRef(({ name, description, photoUrl, message }, ref) => {
    const user = useSelector(selectUser);
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
                <Avatar src={photoUrl}>{user.photoUrl}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOption color="gray" Icon={ThumbUpOffAltIcon} title="Like"/>
            <InputOption color="gray" Icon={ChatOutlinedIcon} title="Comment"/>
            <InputOption color="gray" Icon={ShareOutlinedIcon} title="Share"/>
            <InputOption color="gray" Icon={SendOutlinedIcon} title="Send"/>
        </div>
    </div>
  )
})

export default Post;