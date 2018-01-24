import Header from '../components/header'
import Footer from '../components/footer'
import ProjectCard from '../components/project-card'

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
        <ProjectCard
          projectName="Node-BusPirate"
          projectType="hardware"
          projectDesc="This library was built to control the Bus Pirate with Node.js. Right now it has I2C and UART Functionality. Working on a tester before making progress."
          projectSkills={[
            { name: 'node-serialport', type: 'hardware' }, 
            { name: 'Bus Pirate', type: 'hardware' } 
          ]}
        />
        <div className="col-lg-4">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Node Bus-Pirate</h3>
            </div>
            <div className="panel-body">
              <p></p>
              <p>
                <span className="label label-warning">node-serialport</span>
                <span className="label label-warning">Bus Pirate</span>
              </p>
            </div>
            <div className="panel-footer">
              <a target="_blank" href="https://github.com/nodebotanist/node-bus-pirate"><i className="text-success fa fa-github-alt fa-lg"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Bus-Pirate Tester</h3>
            </div>
            <div className="panel-body">
              <p>This is an AVR Firmware project I'm writing so I can run hardware tests on the Bus Pirate for the bus-pirate node module</p>
              <p>
                <span className="label label-warning">AVR C++</span>
                <span className="label label-warning">Bus Pirate</span>
              </p>
            </div>
            <div className="panel-footer">
              <a target="_blank" href="https://github.com/nodebotanist/node-bus-pirate-tester"><i className="text-success fa fa-github-alt fa-lg"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">The Nodebotanist's Handbook</h3>
            </div>
            <div className="panel-body">
              <p>Just pulling together advice and such based on my myriad of experience, hoping maybe someone will learn from my mistakes.</p>
              <p>
                <span className="label label-info">book</span>
              </p>
            </div>
            <div className="panel-footer">
              <a target="_blank" href="https://www.gitbook.com/book/nodebotanist/nodebotanist-handbook/details"><i className="text-primary fa fa-book fa-lg"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)
