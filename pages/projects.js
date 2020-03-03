import Header from '../components/header'

export default function Projects () {
  return (
    <>
      <Header></Header>
      <div className="container main-body">
        <h1 className="page-title">Projects</h1>
        <div className="card card-light project-legend">
          <div className="card-header"><h4>Legend:</h4></div>
          <div className="card-body">
            <ul>
              <li className="text-primary">Web Development</li>
              <li className="text-success">Hardware/Robotics</li>
            </ul>
          </div>
        </div> 
        <div className="row">
          <div className="col-lg-6">
          <div className="card border-primary mb-3">
              <div className="card-header"><h4 className="text-primary">My Portfolio</h4></div>
              <div className="card-body">
                <div className="card-text">
                  <p>This portfolio was built on:</p>
                  <ul>
                    <li>React</li>
                    <li>Next.JS</li>
                    <li>Bootstrap</li>
                    <li>Bootswatch Cyborg Theme</li>
                  </ul>
                  <p>and hosted on GitHub Pages</p>
                </div>
                <ul class="project-links">
                  <li><a className="icofont-github icofont-2x" target="_" href="https://github.com/nodebotanist/nodebotanist.github.io"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-primary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h4 className="card-title">Primary card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}