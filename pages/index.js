import Link from 'next/link'

import Header from '../components/header'

export default function Index (){
  return (
    <>
      <Header></Header>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <a class="navbar-brand" href="/">Kassian Rosner Wren</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/resume">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/projects">Projects</a>
            </li>
          </ul>
        </div>
        <div class="navbar-nav">
          <a class="icofont-twitter icofont-2x" target="_" href="https://twitter.com/nodebotanist" />
          <a class="icofont-github icofont-2x" target="_" href="https://github.com/nodebotanist" />
          <a class="icofont-linkedin icofont-2x" target="_" href="https://linkedin.com/in/nodebotanist" />
        </div>
      </nav>
      <div>

      </div>
    </>
  )
}