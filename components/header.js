import Head from 'next/head'

export default function Header () {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/icofont.min.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <title>Kassian Rosner Wren</title>
      </Head>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a className="navbar-brand" href="/">Kassian Rosner Wren</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="navbar-nav">
          <a className="icon icon-twitter icofont-twitter icofont-2x" target="_" href="https://twitter.com/nodebotanist" />
          <a className="icon icon-github icofont-github icofont-2x" target="_" href="https://github.com/nodebotanist" />
          <a className="icon icon-linkedin icofont-linkedin icofont-2x" target="_" href="https://linkedin.com/in/nodebotanist" />
        </div>
      </nav>
    </>
  )
}