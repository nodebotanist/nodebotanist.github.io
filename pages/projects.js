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
          links = {[
            {type: 'github', 'link': 'https://github.com/nodebotanist/node-bus-pirate'}
          ]}
        />
        <ProjectCard
          projectName="Bus-Pirate Tester"
          projectType="hardware"
          projectDesc="This is an AVR Firmware project I'm writing so I can run hardware tests on the Bus Pirate for the bus-pirate node module"
          projectSkills= {[
            { name: 'AVR C', type: 'hardware' },
            { name: 'Bus Pirate', type: 'hardware' }
          ]}
          links= {[
            { type: 'github', 'link': 'https://github.com/nodebotanist/node-bus-pirate-tester' }
          ]}
        />
        <ProjectCard
          projectName="The Nodebotanist's Handbook"
          projectType="writing"
          projectDesc="Just pulling together advice and such based on my myriad of experience, hoping maybe someone will learn from my mistakes."
          projectSkills={[
            { name: 'Documentation', type: 'writing' }
          ]}
          links={[
            { type: 'gitbook', link: 'https://www.gitbook.com/book/nodebotanist/nodebotanist-handbook/details' }
          ]}
        />
      </div>
    </div>
    <Footer />
  </div>
)
