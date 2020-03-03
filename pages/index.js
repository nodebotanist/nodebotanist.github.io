import Link from 'next/link'

import Header from '../components/header'

export default function Index (){
  return (
    <>
      <Header></Header>
      <div className="container main-body">
        <div className="jumbotron">
          <h1>Welcome!</h1>
          <p>I'm Kassian Rosner Wren, formerly Kassandra Perch, and this is my portfolio site! This site was built with:</p>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>Bootstrap 4</li>
            <li>Bootswatch Cyborg theme</li>
            <li>GitHub Pages</li>
          </ul>
          <p>I have my projects listed on the projects page, and my resume on the resume page.</p>
          <p>The status page has some widgets I've been working on.</p>
        </div>
      </div>
    </>
  )
}