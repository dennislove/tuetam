import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";

const VideoClipComponent = () => {
    const [media, setMedia] = useState([]);
    const [videoStates, setVideoStates] = useState({}); // Stores states for each video

    useEffect(() => {
      const dbRef = ref(getDatabase());
  
      get(child(dbRef, `Media`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const fetchedMedia = [];
            const initialStates = {};
            snapshot.forEach(childSnapshot => {
              const key = childSnapshot.key;
              const data = childSnapshot.val();
              fetchedMedia.push({ id: key, ...data });
              initialStates[key] = { isPlaying: false, ref: React.createRef() }; // Initialize state and ref for each video
            });
            setMedia(fetchedMedia);
            setVideoStates(initialStates);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    const handlePlay = (id) => {
      // Update only the clicked video to play, reset others
      const updatedStates = { ...videoStates };
      Object.keys(updatedStates).forEach(key => {
        updatedStates[key].isPlaying = (key === id);
      });
      setVideoStates(updatedStates);
    };

    const handleClose = (id) => {
      // Stop the video and reset the play state
      videoStates[id].ref.current.pause();
      videoStates[id].ref.current.currentTime = 0;
      setVideoStates(prev => ({ ...prev, [id]: { ...prev[id], isPlaying: false } }));
    };

    return (
      <div className='relative mt-10 grid md:grid-cols-6 sm:grid-cols-2 pm:grid-cols-1 gap-5 lg:mx-auto pm:mx-5'>
        {media.map((item) => (
          <div className="md:col-span-2 " key={item.id}>
            {!videoStates[item.id]?.isPlaying && (
              <div className="cursor-pointer w-full rounded-lg relative overflow-hidden block" onClick={() => handlePlay(item.id)} >
                <button className='absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300 z-10 rounded-full p-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                </button>
                <img src={item.image} alt={item.id} className="object-cover hover:scale-125 transition duration-1000" />

                <h2 className='text-white text-center h-[60px] font-semibold font-pop text-xl uppercase w-full bg-yellow-600'>{item.title}</h2>
           
              </div>
            )}
            {videoStates[item.id]?.isPlaying &&(
                <div className='absolute z-[40] left-0 w-full' >
                        <button className='absolute rounded-full z-10 p-2 bg-slate-100 right-0 cursor-pointer' onClick={() => handleClose(item.id)}  >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
            
                        </button>
                        <div className=''>
                            <video
                                ref={videoStates[item.id].ref}
                                src={item.video}
                                className="w-full h-full"
                                autoPlay
                                controls
                            />
                        </div>
                    </div>
             )}
      </div>
    ))} 
      
    </div>
  );
};

export default VideoClipComponent;
