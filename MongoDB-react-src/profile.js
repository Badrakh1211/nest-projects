
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './profile.css';
import { Link, useNavigate } from "react-router-dom"
import Login from './login'

const Profile = (name) => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [acc, setAcc] = useState([])
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

  let classname = "like"
  const red = () => {
    setCount(count + 1)
    if (count % 2 === 1) {
      classname = "liked"
      console.log('sdfsdf')
    } else {
      classname = "like"
    }
  }
  const uid = localStorage.getItem('uid')

  const Post = () => {
    return (
      <div></div>
    );
  }
  return (
    <div className='biggest'>
      <div className='navbar'>
        <img className="insta" src={require("./img/instagram-logo-black-on-white.webp")} />
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
      <div className='your-page'>
        <div className='first'></div>
        <div className='second'>
          <div className='main'>
            <div className='protect'>
              <img src={require("./img/Default_pfp.jpeg")} className='def2'></img>
              <h1 className='your-name'>{uid}</h1>
            </div>
            <button className='add-post' onClick={Post}>Add post</button>
          </div>
          <div className='post-section'></div>
        </div>
        <div className='third'></div>
      </div>
    </div>
  );
}

export default Profile;