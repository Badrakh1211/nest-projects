import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState, useRef, use } from 'react'

export default function Home() {
    const router = useRouter()
    const [data, setData] = useState([])
    const instance = axios.create({
        baseURL: "http://localhost:8000/"
    })
    const Push = async ({id, checkbox}) => {
        const change = await instance.patch(`/${id}`, {isDone: checkbox})
    }

    const getList = async () => {
        try {
            const res = await instance.get("/list")
            setData(res.data.data)
            console.log(res.data.data._id)
        } catch (err) {
            alert("failed")
        }
    }
    console.log(data)
    useEffect(() => {
        getList();
    }, [])

    return (
        <div>
            <button onClick={() => router.push("/")}>Return</button>
            <div>
                {data.map
                    ((el) =>
                        <div>{el.title}, {el.detail}
                            <input type="checkbox" defaultChecked={el.isDone} ref={input} onChange={Push} />
                        </div>
                    )}
            </div>
        </div>
    )
}