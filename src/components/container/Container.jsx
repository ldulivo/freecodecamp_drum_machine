import { useState} from 'react'
import DrumPad from '../drumPad/DrumPad'

export default function Container() {
    const [display, setDisplay] = useState('')

    const myDisplay = (instrument) => {
        setDisplay( instrument );
    }

  return (
    <div className='Container' id="drum-machine">
        <section id="display">
            <h1>Display</h1>
            <p>
                { display }
            </p>
        </section>
        
        <DrumPad myDisplay={ myDisplay }/>
    </div>
  )
}
