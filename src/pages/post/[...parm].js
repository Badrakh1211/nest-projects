
import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { parm } = router.query 

  return (
    <div>
        <p>Slug: {parm} </p>
    </div>
  )
}

export default Comment