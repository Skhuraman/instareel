import React from 'react';
import "./VideoFooter.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Ticker from 'react-ticker';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function VideoFooter({channel, song, likes, shares,
avatarSrc }) {

  return (
    <div className='videoFooter'> 
     <div className='videoFooter__text'>
  <Avatar  alt="Remy Sharp" src={avatarSrc}></Avatar>
      
      
      <h3 className='vFT'>
        {channel} . <Button variant="text" sx={{color:'white'}}>Follow</Button>
      </h3></div>
      <div className='video__Ticker'>
      <MusicNoteIcon className='videoFooter__icon' />
      <Ticker mode='smooth'>
        {({ index }) => (
            <>
                <h1 className='songText'>{song}!</h1>
                
            </>
        )}
    </Ticker>
    </div>
    <div className='videoFooter__actions'>
      <div className='videoFooter__actionsLeft'>
        <FavoriteIcon fontSize="large" />
        <ModeCommentIcon fontSize="large" />
        <SendIcon fontSize="large" />
        <MoreHorizIcon fontSize="large" />

      </div>
      <div className='VideoFooter__actionRight'>
          <div className='videoFooter__stat'>
            <FavoriteIcon />
            <p>{likes}</p>
          </div>
          <div className='videoFOOTER__stat2'>
            <ModeCommentIcon />
            <p>{shares}</p>
          </div>
      </div>
    </div>
    </div>
    
  )
}

export default VideoFooter