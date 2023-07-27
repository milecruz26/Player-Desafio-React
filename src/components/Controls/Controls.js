import Play from '../../assets/play.svg';
import Stop from '../../assets/stop.svg';
import Pause from '../../assets/pause.svg';
import Previous from '../../assets/previous.svg';
import Next from '../../assets/next.svg';
import { useState } from 'react';
import musics from '../../musics';
import styles from './Controls.module.css'

export default function Controls({ audioRef, trackInfo, setTrackInfo }) {


  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  function clickPlayCard(music) {
    if (music === trackInfo.currentTrack) {
      audioRef.current.play()
      setTrackInfo(() => ({ ...trackInfo, currentTrack: music, playing: true }))
    } else {
      audioRef.current.src = music.url
      audioRef.current.load()
      audioRef.current.play()
      setTrackInfo(() => ({ playing: true, currentTrack: music, currentTime: 0 }))
    };


    setCurrentTrackIndex(musics.findIndex((musica) => musica.id === music.id));
  }

  function handleClickPause() {
    audioRef.current.pause()
    setTrackInfo(() => ({ ...trackInfo, playing: false }));

  }

  function handleClickStop() {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setTrackInfo(() => ({ ...trackInfo, playing: false }));
  }

  function handleClickPrevious() {
    const previousIndex = (currentTrackIndex - 1 + musics.length) % musics.length;
    const previousMusisc = musics[previousIndex];
    setCurrentTrackIndex(previousIndex)
    clickPlayCard(previousMusisc)

  }

  function handleClickNext() {
    const nextIndex = (currentTrackIndex + 1) % musics.length;
    const nextMusisc = musics[nextIndex];
    setCurrentTrackIndex(nextIndex)
    clickPlayCard(nextMusisc)

  }

  return (
    <div className={styles.container}>
      <div className={styles.artistMusic}>
        <h2>{trackInfo.playing || trackInfo.currentTrack ?
          trackInfo.currentTrack.title : ''}</h2>

        <h3>{trackInfo.playing || trackInfo.currentTrack ?
          trackInfo.currentTrack.artist : ''} </h3>

      </div>

      <div className={styles.player}>
        <img
          src={Previous}
          alt="anterior"
          onClick={handleClickPrevious}
          style={{ cursor: 'pointer' }} />

        {trackInfo.playing && trackInfo.currentTrack ?
          <img
            src={Pause}
            alt="pause"
            onClick={handleClickPause}
            style={{ cursor: 'pointer' }}
          /> :
          <img
            src={Play}
            alt="executar"
            onClick={() => clickPlayCard(trackInfo.currentTrack || musics[currentTrackIndex])}
            style={{ cursor: 'pointer' }}
          />}

        <img
          src={Stop}
          alt="parar"
          onClick={handleClickStop}
          style={{ cursor: 'pointer' }} />

        <img
          src={Next}
          alt="próximo"
          onClick={handleClickNext}
          style={{ cursor: 'pointer' }} />
      </div>
    </div>
  )
}