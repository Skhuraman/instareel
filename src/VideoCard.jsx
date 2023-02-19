import React,{useState,useRef} from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({channel, url,  song, likes,
share, avatarSrc}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);
  
    const onVideoPress = () => {
      if (isVideoPlaying) {
          // stop
          videoRef.current.pause();
          setIsVideoPlaying(false)
      } else {
          //play
          videoRef.current.play();
          setIsVideoPlaying(true);
      }
    }

  return (
    <div className='videoCard'>
       <VideoHeader />
       <video
       ref={videoRef}
       onClick={onVideoPress}
       className='video__Player'
       src={url}
       alt='IG REEL vedeo'
       loop>

       </video>
       
       <VideoFooter
        channel='Skhuraman'
        avatarSrc={avatarSrc}
        song='skhuraman - WAR'
        likes={255}
        shares={9} />
    </div>
  )
};

export default VideoCard