import { useEffect } from 'react';

export default function DrumPad({ myDisplay }) {

    const drumPadPlay = (event) => {
        const myKey = event.target.children[0];
        myAudioPlay(myKey);
    }
    
    const keyPressed = () => {
        document.addEventListener('keydown', function(e) {
            const toUpperCaseKey = e.key.toUpperCase()
            if (
                toUpperCaseKey === 'Q' ||
                toUpperCaseKey === 'W' ||
                toUpperCaseKey === 'E' ||
                toUpperCaseKey === 'A' ||
                toUpperCaseKey === 'S' ||
                toUpperCaseKey === 'D' ||
                toUpperCaseKey === 'Z' ||
                toUpperCaseKey === 'X' ||
                toUpperCaseKey === 'C'
                ) {
                    
                    const myKey = document.getElementById( toUpperCaseKey );
                    myAudioPlay(myKey);
            } else {
                return;
            }
    
        })
    }

    const myAudioPlay = (track) => {
        track.play()
        myDisplay(track.id);
    }

    useEffect( () => {
        keyPressed();
    }, [])
  return (
    <section className='DrumPad'>
        <button 
            className='drum-pad' 
            id='drum-pad' 
            onClick={drumPadPlay}
        >
            Q
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" className='clip' id='Q'>
            </audio>
        </button>
        
        <button 
            className='drum-pad' 
            id='drum-pad' 
            onClick={drumPadPlay}
        >
            W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" className='clip' id='W'>
            </audio>
        </button>
        
        <button 
            className='drum-pad' 
            id='drum-pad' 
            onClick={drumPadPlay}
        >
            E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" className='clip' id='E'>
            </audio>
        </button>
        
        <button 
            className='drum-pad' 
            id='drum-pad' 
            onClick={drumPadPlay}
        >
            A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className='clip' id='A'>
            </audio>
        </button>
        
        <button 
            className='drum-pad' 
            id='drum-pad' 
            onClick={drumPadPlay}
        >
            S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" className='clip' id='S'>
            </audio>
        </button>
        
        <button 
            className='drum-pad' 
            id='drum-pad' 
            onClick={drumPadPlay}
        >
            D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" className='clip' id='D'>
            </audio>
        </button>
        
        <button 
            className='drum-pad' 
            id='drum-pad' 
            onClick={drumPadPlay}
        >
            Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" className='clip' id='Z'>
            </audio>
        </button>
        
        <button 
            className='drum-pad' 
            id='drum-pad' 
            onClick={drumPadPlay}
        >
            X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" className='clip' id='X'>
            </audio>
        </button>
        
        <button 
            className='drum-pad' 
            id='drum-pad' 
            onClick={drumPadPlay}
        >
            C
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className='clip' id='C'>
            </audio>
        </button>
    </section>
  )
}
