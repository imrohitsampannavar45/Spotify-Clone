// import React, { useContext } from 'react'
// import Sidebar from './components/Sidebar'
// import Player from './components/Player'
// import Display from './components/Display'
// import { PlayerContext } from './context/PlayerContext'

// const App = () => {
// const {audioRef,track} = useContext(PlayerContext)


//   return (
//     <div className='h-screen bg-black'>
//       <div className='h-[90%] flex'>
//           <Sidebar />
//           <Display />
//       </div>
//         <Player />
//         <audio ref={audioRef} src={track.file} preload='auto'></audio>

//     </div>
//   )
// }

// export default App

import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const { audioRef, track } = useContext(PlayerContext)

  // Check if track is defined before accessing its properties
  const trackFile = track ? track.file : null;

  // Check if audioRef is defined before accessing its methods
  const playAudio = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      {/* Check if trackFile is available before rendering audio element */}
      {trackFile && <audio ref={audioRef} src={trackFile} preload='auto'></audio>}
    </div>
  )
}

export default App
