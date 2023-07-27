import './App.css';
import { useRef, useState } from 'react';
import Controls from './components/Controls/Controls';
import Header from './components/Header/Header';
import Card from './components/Playlist/Card';
import Cover from './components/Playlist/Cover';
import musics from './musics';

function App() {
  const audioRef = useRef(null)
  const [trackInfo, setTrackInfo] = useState({
    playing: false,
    currentTime: 0,
    currentTrack: null,

  });


  function clickCardPlay(music) {
    audioRef.current.src = music.url
    audioRef.current.load()
    audioRef.current.play()
    setTrackInfo(() => ({ currentTrack: music, playing: true, currentTime: 0 }))

  }

  return (
    <div className='container'>
      <audio onTimeUpdate={() => setTrackInfo(() => ({ ...trackInfo, currentTime: audioRef.current.currentTime }))}
        ref={audioRef} />
      <Header />

      <main className='main'>

        <div className='title'>
          <h1>
            The best play list
          </h1>
        </div>

        <hr className='hr2' />

        <div>

          <section className='playlist'>

            {musics.map((music) =>
            (<Card
              key={music.id}
              title={music.title}
              description={music.description}
            >

              <Cover
                cover={music.cover}
                alt={music.artist}
                onClick={() => clickCardPlay(music)}

              />

            </Card>

            ))}
          </section>

        </div>

      </main>

      <footer>

        <div className='player'>
          <Controls
            audioRef={audioRef}
            trackInfo={trackInfo}
            setTrackInfo={setTrackInfo}
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
