import Link from 'next/link'

export default function Index (){
  return (
    <div>
      <p>Hello, Next.js!</p>
      <Link href="index" title="home">Home</Link>
    </div>
  )
}