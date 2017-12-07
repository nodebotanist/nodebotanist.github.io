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
              <h3 className="panel-title">Node Bus-Pirate</h3>
            </div>
            <div className="panel-body">
              <p>So this library was built to control the Bus Pirate with Node.js. Right now it has I2C and UART Functionality. Working on a tester before making progress.</p>
              <p>
                <span className="label label-warning">node-serialport</span>
                <span className="label label-warning">Bus Pirate</span>
              </p>
            </div>
            <div className="panel-footer">
              <a href="https://github.com/nodebotanist/node-bus-pirate"><i class="text-success fa fa-github-alt fa-lg"></i></a>
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
