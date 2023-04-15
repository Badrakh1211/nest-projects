
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './login.css';
import { Link, useNavigate } from "react-router-dom"
import { App } from './page'

const Sign = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const instance = axios.create({
    baseURL: 'https://back-end-lyart.vercel.app/',
  })



  const refUser = useRef(null)
  const refPass = useRef(null)
  const navigate = useNavigate()
  const Check = async () => {
    if (refUser.current.value === '' && refPass.current.value !== '') {
      alert("username is empty")
      navigate('/sign')
    }
    if (refPass.current.value === '' && refUser.current.value !== '') {
      alert("password is empty")
      navigate('/sign')
    }
    if (refUser.current.value === '' && refPass.current.value === '') {
      alert("password and username is empty")
      navigate('/sign')
    }
    const user = await instance.post('/signin', { username: refUser.current.value, password: refPass.current.value })
    if (user.status === 200) {
      navigate('/instagram')
    }
    localStorage.setItem('uid', user.data.data.username)
  }
  return (
    <div className='container'>
      <div className='card'>
        <img className="word" src={require("./img/2-27715_instagram-png-logo-instagram-word-logo-png.png")} ></img>
        <input ref={refUser} className="user" placeholder='Username'></input>
        <input ref={refPass} className="pass" placeholder='Password' type="password"></input>
        <input className='user' placeholder='Gender'></input>
        <button className='signin' onClick={Check}>
          Sign up
        </button>
        <img className="store" src={require('./img/apple-app-store-travel-awards-globestamp-7.png')}></img>
      </div>
    </div>
  );
}

export default Sign;