import Header from '../components/header'
import Footer from '../components/footer'

export default () => (
  <div>
    <Header />
    <div className="container">
      <h1>Projects Page</h1>
      <p>I do a lot of random crap, and I put my favorites here. I color-coded them because why not?</p>
      <p>Color coding is as follows:</p>
      <ul>
        <li className="text-warning">Robotics/Hardware Project</li>
        <li className="text-success">Web Development Project</li>
        <li className="text-info">Writing Project</li>
      </ul>
      <div className="row">
        <div className="col-lg-4">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Title</h3>
            </div>
            <div className="panel-body">
              <p>Test</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">

        </div>
        <div className="col-lg-4">

        </div>
      </div>
    </div>
    <Footer />
  </div>
)
