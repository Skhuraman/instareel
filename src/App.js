import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
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
      {/*app videos*/}
      <VideoCard 
      channel='skhuraman'
      avatarSrc={"https://www.instagram.com/p/BusCUEEnQiO/"}
      song='skhuraman - WAR'
      url={'https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4'}
      likes={255}
      shares={90}
      />
      <VideoCard
      channel='skhuraman'
      avatarSrc={""}
      song='skhuraman - WAR'
      url={'https://joy.videvo.net/videvo_files/video/premium/partners0260/small_watermarked/BB_59a8761a-3f92-4d52-80b0-0cad4129725d_preview.webm'}
      likes={255}
      shares={90}
      />
      <VideoCard
      channel='skhuraman'
      avatarSrc={""}
      song='skhuraman - WAR'
      url={'https://joy1.videvo.net/videvo_files/video/free/2014-12/large_watermarked/Raindrops_Videvo_preview.mp4'}
      likes={255}
      shares={90}
      /><VideoCard
      channel='skhuraman'
      avatarSrc={""}
      song='skhuraman - WAR'
      url={'https://cdn.videvo.net/videvo_files/video/premium/video0035/small_watermarked/barb_new08_preview.webm'}
      likes={255}
      shares={90}
      /><VideoCard
      channel='skhuraman'
      avatarSrc={""}
      song='skhuraman - WAR'
      url={'https://joy1.videvo.net/videvo_files/video/free/2020-04/large_watermarked/200314%20_Work%20Life_02_%204k_058_preview.mp4'}
      likes={255}
      shares={90}
      />
      
     </div>

    </div>
  );
}

export default App;
