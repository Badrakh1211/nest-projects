
import './App.css';
import { Link, useParams } from 'react-router-dom'

function App() {
  return (
    <div className="Container">
      <div className="button-container" >
        <Link className='game' to={'/game'}>
        <button className="start" >Start game</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
