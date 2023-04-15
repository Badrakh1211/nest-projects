import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState()
    const router = useRouter()
    const instance = axios.create({
      baseURL: "http://localhost:8000/"
    })
    const getList = async () => {
      try {
      const res = await instance.get("/list")
      setData(res.data.data)
      console.log(data)
      } catch(error) {
        alert("failed")
      }
    }

    useEffect(() => {
      getList()
    }, [])

    return (
      <div>
      {/* <button onClick={() => router.push("/blue") }>Click me</button>
      <p>Page index</p> */}
      {/* <div>{data}</div> */}
      </div>
    )
} 