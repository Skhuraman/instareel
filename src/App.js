import ReactDOM from 'react-dom';
import React, { useEffect,useState } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './Firebase';


function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
db.collection('reels').onSnapshot(snapshot => (
 setReels(snapshot.docs.map(doc => doc.data()))
))
  }, [])
  return (
    <div className="App">
     <div className='app_top'>
      {/*image at top- logo*/}
       <img 
       className='app_logo'
        src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg"
        alt=''
        />
        <h1 className='text1'>Reels
        </h1>
     </div>
     <div className='app__vidoes'>
      {reels.map(({channel, avatarSrc, song, url, likes, shares}) => (
      <VideoCard 
      channel={channel}
      avatarSrc={avatarSrc}
      song={song}
      url={url}
      likes={likes}
      shares={shares}
      />
      ))}
      
     </div>

    </div>
  );
}

export default App;
