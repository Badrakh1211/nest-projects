import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
    return (
      <div>
      <button onClick={() => router.push("/post") }>Click me</button>
      <p>Page blue</p>
      </div>
    )
  }