import Head from 'next/head'

export default () => (
  <div className="container">
    <Head>
      <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,700" rel="stylesheet" />
      <link rel="stylesheet" href="/static/css/styles.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>My page title</title>
    </Head>
    <nav className="row">
      <div className="col-md-4 nav-container">
        <a className="nav-brand" href="#">nodebotani.st</a>
      </div>
      <div className="col-md-8 nav-container">
        <ul className="list-unstyled list-inline pull-right">
          <li>
            <a className="nav-link" href="#">About</a>
          </li>
          <li>
            <a className="nav-link" href="#">Dev Projects</a>
          </li>
          <li>
            <a className="nav-link" href="#">Bibliography</a>
          </li>
          <li>
            <a className="nav-link" href="#">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container">
      <h1>"The Nodebotanist"</h1>
      <h4>(a.k.a. Mx. Kas Perch)</h4>
    </div>
    <div className="row">
      <footer id="footer" className="col-lg-12 nav-container">
        <ul className="list-unstyled list-inline">
          <li>
            <a href="https://twitter.com/nodebotanist">Twitter</a>
          </li>
          <li>
            <a href="https://twitter.com/nodebotanist">Twitter</a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
)
