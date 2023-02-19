import React from 'react';
import "./VideoFooter.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MusicNoteIcon from '@mui/icons-material/MusicNote';;


function VideoFooter({channel, song, likes, share,
avatarSrc }) {

  return (
    <div className='videoFooter'> 
  
  <Avatar  alt="Remy Sharp" src={avatarSrc}></Avatar>
      
      
      <h3 className='vFT'>
        {channel} . <Button variant="text" sx={{color:'white'}}>Follow</Button>
      </h3>
      <div className='video__Ticker'>
      <MusicNoteIcon />
    </div>
    </div>
    
  )
}

export default VideoFooter