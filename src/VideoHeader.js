import React from 'react'
import './VideoHeader.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
function VideoHeader() {
  return (
    <div className='videoHeader' ><ArrowBackOutlinedIcon ></ArrowBackOutlinedIcon>       
          <h3>REELS</h3>
           <CameraAltOutlinedIcon></CameraAltOutlinedIcon>
 </div>
  )
}

export default VideoHeader