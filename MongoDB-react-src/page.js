
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Link, useNavigate } from "react-router-dom"
import Login from './login'

export const App = (name) => {
  const [count, setCount] = useState(null)
  const [data, setData] = useState([])
  const [acc, setAcc] = useState([])
  const [like, setLike] = useState("like")
  const [limit, setLimit] = useState(4)
  const instance = axios.create({
    baseURL: 'https://back-end-lyart.vercel.app/',
  })
  const getUsers = async () => {
    try {
      const res = await instance.get(`/`)
      setData(res.data.data)
    } catch (err) {
      // alert('dahiad yavul');
    }
  }

  const getAccounts = async () => {
    try {
      // const uid_username = await instance.get(`/${uid}`)
      
      const get = await instance.get(`/accounts`)
      setAcc(get.data.data)
    } catch (error) {
      alert("ERROR")
    }
  }

  useEffect(() => {
    getUsers();
    getAccounts()
  }, []);

  const navigate = useNavigate()
  const refresh = () => {
    navigate("/instagram")
  }

  const red = () => {
    setCount(count + 1)
    if (count % 2 === 1) {
      setLike("liked")
    } else {
      setLike("like")
    }
  }

  localStorage.setItem('num', 3)
  const num = localStorage.getItem("num")
  useEffect(() => {
    setLimit(num)
  const Set = async () => {
    setLimit( + 1 )
      const res = await instance.get(`/`, {skip: 0, limit: limit})
  }
}, [3]);

  // let last = acc[acc.length - 1]?.username
  // // acc => [] => 0 => undefined?.username => no
  // console.log(last)
  
  return (
    <div className='biggest'>
      <div className='navbar'>
        <img className="insta" src={require("./img/instagram-logo-black-on-white.webp")} />\
        <div className='box'>
          <svg onClick={refresh} className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
          <h2 className='Home' onClick={refresh}>Home</h2>
        </div>
        <div className='low'>
          <div className='pfp'>
            <img className='def' src={require('./img/Default_pfp.jpeg')} ></img>
          </div>
          <Link className='profile' to={'/profile'}>Your profile</Link>
        </div>
      </div>
      <div className='posts-container'>
        <div className='box2'></div>
        <div className='box3'>
          <div className='posts'>
            {data.map((cur) => <Posts pro={cur.pfp} name={like} red={red} username={cur.username} post={cur.post} likes={cur.like} description={cur.description}></Posts>)}
          </div>
        </div>
        <Suggest/>
        <div className='box4'></div>
      </div>
    </div>
  );
}

const Posts = ({ name, red, pro, username, post, likes, description }) => {
  return (
    <div className='post'>
      <div className='owner'>
        <div className='owner-pic'>
          <img src={pro} className="pfps" ></img>
        </div>
        <p className='usernames'>{username}</p>
      </div>
      <div className='pic' >
        <img src={post} className="view" ></img>
      </div>
      <div className='desc'>
        <div>
          <svg className={name} onClick={red} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
          <svg className='like' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>
          <svg className='like' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
        </div>
        <div>
          <p className='likes'>{likes} likes</p>
        </div>
        <div>
          <p className='descs'>{description}</p>
        </div>
        <div>
          <p className='com'>No comments yet</p>
        </div>
        <input className='comment' placeholder='Add a comment...'></input>
        <button className='add'>Post</button>
      </div>
    </div>
  )
}

const Suggest = ({pfp}) => {
  const uid = localStorage.getItem('uid');
  return (
    <div className='suggest'>
    <div className='pfp1' >
    <img className='def' src={require('./img/Default_pfp.jpeg')}></img>
  </div>
  <p className='yourname'>{uid}</p>
      </div>
  )
}