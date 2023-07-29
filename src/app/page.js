
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1> hello </h1>

      <Link href={"/posts"}>
        <button className='btn btn-primary'>
          go to the posts page
        </button>

      </Link>
    </div>
  )
}
