import React from 'react'
import './VideoFooter.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function VideoFooter({channel, song, likes, share,
avatarSrc }) {
  return (
    <div className='videoFooter'> 
    <div clasname='videoFooter__text'>
      <AccountCircleOutlinedIcon src={avatarSrc} />
      
      <h3>
        {channel} . <button variant="outlined">Follow</button>
        </h3></div></div>
  )
}

export default VideoFooter