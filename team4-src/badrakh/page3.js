import './page3.css';
import axios from "axios"
import React, { useState, useEffect } from 'react';

function Page3() {
  const [pagination, setPagination] = useState(3)
  const [data, setData] = useState([])
  const instance = axios.create({
    baseURL: 'http://localhost:8000',
  })
  const getNews = async () => {
    try {
      const res = await instance.get(`/?pagination=${pagination}`)
      setData(res.data.data)
      console.log(data)
    } catch (error) {
      alert("error")
    }
  }

  const last = data.length
  const set = () => {
  setTimeout(() => {
      if (pagination <= last){
        setPagination(pagination + 3)
      }
      else {
        alert("no more news to show :)")
      }
  }, 500)
}
    const less = () => {
      setTimeout(() => {
      if (pagination >= 4) {
      setPagination(pagination - 3)
    } else {
      alert("there is have to be atleast 3 news on the site :)")
    }
  }, 500)
  }  
  useEffect(() => {
    getNews();
  }, [pagination])

  useEffect(() => {
    setPagination(3)
  }, [])



  return (
    <div className="Container-page3">
      <div className='header-page3'>
        <h2 className="title-page3" >team.</h2>
        <div className="link-container-page3">
          <p className="links-page3" >Products</p>
          <p className="links-page3" >Services</p>
          <p className="links-page3" >Contact</p>
          <p className="links-page3" >Log in</p>
          <button className="access-button-page3" >Get Access</button>
        </div>
      </div>
      <div className="body-page3" >
        <div className="body-title-page3" >
          <h2 className="blog-page3" >Blog posts</h2>
          <p className="para-page3" >Our latest updates and blogs about managing your team</p>
        </div>
        <div className="cardud-page3" >
          {
            data.map((cur) => <Cards post={cur.post} title={cur.title} desc={cur.desc} username={cur.username} pfp={cur.pfp}></Cards>)
          }
        </div>
        <button className="point-button" onClick={set} >Show more</button>
        <button className="point-button" onClick={less} >Show less</button>
      </div>
      <div className="footer-page3" >
        <div className="grid1-page3" >
          <h1 className="footer-title-page3" >team.</h1>
          <div>
            <img className="logo-page3" src={require("/Users/badrakh/Desktop/team4/project/src/img/Instagram.png")} />
            <span className="social-page3" >instagram</span>
          </div>
          <div>
            <img className="logo-page3" src={require("/Users/badrakh/Desktop/team4/project/src/img/Facebook.png")} />
            <span className="social-page3" >facebook</span>
          </div>
          <div>
            <img className="logo-page3" src={require("/Users/badrakh/Desktop/team4/project/src/img/Twitter.png")} />
            <span className="social-page3" >twitter</span>
          </div>
          <div>
            <img className="logo-page3" src={require("/Users/badrakh/Desktop/team4/project/src/img/Instagram.png")} />
            <span className="social-page3" >instagram</span>
          </div>
          <div>
            <img className="logo-page3" src={require("/Users/badrakh/Desktop/team4/project/src/img/Facebook.png")} />
            <span className="social-page3" >facebook</span>
          </div>
          <div>
            <img className="logo-page3" src={require("/Users/badrakh/Desktop/team4/project/src/img/Twitter.png")} />
            <span className="social-page3" >twitter</span>
          </div>
        </div>
        <Social className="grid2-page3" name="Uses Cases" name1="UI Design" name2="Ux Design" name3="Prototype" name4="UI Design" name5="UX Design" name6="Prototype" />
        <Social className="grid2-page3" name="Explore" name1="Figma" name2="Costumers" name3="Why I Love Figma" name4="Figma" name5="Costumers" name6="Why I Love Figma" />
        <Social className="grid2-page3" name="Resources" name1="Community Resources Hub" name2="Support" name3="Education" name4="Community Resources Hub" name5="Support" name6="Education" />
        <div className="grid5-page3" >
          <h2 className="sub-page3" >Subscribe to our newsletter</h2>
          <input placeholder="Email" className="input-page3" />
          <button className="add-page3">Add</button>
        </div>
      </div>
    </div>
  );
}

const Cards = ({ post, title, desc, username, pfp }) => {
  return (
    <div className="card-container-page3" >
      <div className="card-page3" >
        <div className="box1-page3" >
          <img className="image-page3" src={post} />
        </div>
        <div className="box2-page3" >
          <h2 className="ux-page3" >{title}</h2>
          <p className="deep-page3" >{desc}</p>
        </div>
        <div className="box3-page3" >
          <img className="pfp-page3" src={pfp} />
          <p className="username-page3" >{username}</p>
        </div>
      </div>
    </div>
  )
}

const Social = ({ className, name, name1, name2, name3, name4, name5, name6 }) => {
  return (
    <div className={className} >
      <span className="jobs-title-page3" >{name}</span>
      <span className="jobs-page3" >{name1}</span>
      <span className="jobs-page3" >{name2}</span>
      <span className="jobs-page3" >{name3}</span>
      <span className="jobs-page3" >{name4}</span>
      <span className="jobs-page3" >{name5}</span>
      <span className="jobs-page3" >{name6}</span>
    </div>
  )
}

export default Page3;