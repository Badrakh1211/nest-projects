import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [mill, setMill] = useState(0);
    const [timer, setTimer] = useState(0);
    const [control, setControl] = useState('stop');
    const [minute, setMinute] = useState(0);
  
    useEffect(() => {
      if(control === "reset") {
        setMill(mill - mill)
        setTimer(timer - timer)
        setMinute(minute - minute)
      }
       if(control === 'running')
        setTimeout(() => {
          setMill(mill + 1);
          if(mill === 999 ) {
            setTimer(timer + 1)
            setMill(mill - 999)
          }
          if(timer === 60) {
            setMinute(minute + 1)
            setTimer(timer - 59 )
          }
        }, 1);
    }, [timer, control, mill]);
  return (
    <div>
      <div className='container'>
        <div className='timer'>
        <span className="minute" >{minute}m</span>
        <span className='second' >:{timer}s</span>
        <span className='mill'>:{mill}</span>
        </div>
        <div className='buttons' >
      <button className='start' onClick={() => { setControl('running') }}>Start</button>
      <button className='stop' onClick={() => { setControl('stop') }}>Stop</button>
      <button className='reset' onClick={() => { setControl('reset') }}>Reset</button>
      </div>
      </div>
    </div>
  );
}

export default App;
