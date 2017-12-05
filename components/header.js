import Head from 'next/head'

export default () => (
  <div className="container">
    <Head>
      <script src="https://use.fontawesome.com/de34fc0dd0.js"></script>
      <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Fira+Mono:400,700" rel="stylesheet" />
      <link rel="stylesheet" href="/static/css/styles.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Nodebotani.st</title>
    </Head>
    <nav className="row">
      <div className="col-md-4 nav-container">
        <a className="nav-brand" href="/index">nodebotani.st</a>
      </div>
      <div className="col-md-8 nav-container">
        <ul className="list-unstyled list-inline pull-right">
          <li>
            <a className="nav-link" href="/about">About</a>
          </li>
          <li>
            <a className="nav-link" href="/projects">Dev Projects</a>
          </li>
          <li>
            <a className="nav-link" href="/bibliography">Bibliography</a>
          </li>
          <li>
            <a className="nav-link" href="/bragging">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)
