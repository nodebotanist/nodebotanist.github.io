import Link from 'next/link'

import Header from '../components/header'

export default function Index (){
  return (
    <>
      <Header></Header>
      <div>
        <p>Hello, Next.js!</p>
        <Link href="profile">My profile</Link>
      </div>
    </>
  )
}