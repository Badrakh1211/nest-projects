import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
    return (
      <div>
      <button onClick={() => router.push("/") }>Return</button>
      </div>
    )
  }