import logo from './logo.svg';
import './game.css';
import { Link, useParams } from 'react-router-dom'

function Choose() {
  return (
    <div className="Container">
        <div className='title'>
        <h1 className='dif'>Choose your game difficulty</h1>
        </div>
        <div className='choose'>
            <div>
                <Dif txt="Easy"></Dif>
                <Link className='easy' to={'/easy'}>
            <button className='option'>4x4</button>
            </Link>
            </div>
            <div>
            <Dif txt="Normal"></Dif>
            <Link className='normal' to={'/normal'}>
            <button className='option'>5x4</button>
            </Link>
            </div>
            <div>
            <Dif txt="Hard"></Dif>
            <Link className='hard' to={'/hard'}>
            <button className='option'>6x6</button>
            </Link>
            </div>
        </div>
    </div>
  );
} 

function Dif({txt}) {
    return (
    <h2 className='op'>{txt}</h2>
    )
}

export default Choose;