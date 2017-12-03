import Head from 'next/head'

export default () => (
  <div className="container">
    <Head>
      <script src="https://use.fontawesome.com/de34fc0dd0.js"></script>
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
      <h4 className="text-success">(a.k.a. Mx. Kas Perch)</h4>
    </div>
    <div className="row">
      <footer id="footer" className="col-lg-12 nav-container">
        <ul className="list-unstyled list-inline">
          <li>
            <a href="https://twitter.com/nodebotanist">
              <span className="sr-only">Twitter</span>
              <i className="fa fa-twitter fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://twitch.tv/nodebotanist">
              <span className="sr-only">Twitch</span>
              <i className="fa fa-twitch fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/nodebotanist">
              <span className="sr-only">GitHub</span>
              <i className="fa fa-github-alt fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/nodebotanist">
              <span className="sr-only">LinkedIn</span>
              <i className="fa fa-linkedin-square fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://medium.com/@nodebotanist">
              <span className="sr-only">Medium</span>
              <i className="fa fa-medium fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/user/kasperch">
              <span className="sr-only">Spotify</span>
              <i className="fa fa-spotify fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="http://steamcommunity.com/id/nodebotanist/">
              <span className="sr-only">Steam</span>
              <i className="fa fa-steam-square fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC2Md-YpApr3XPTiFhCVrLeA">
              <span className="sr-only">YouTube</span>
              <i className="fa fa-youtube-play fa-lg"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
)
