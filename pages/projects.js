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
          name="Portfolio"
          type="web"
          desc="You're looking at it. I wanted to learn Next.js and React 16. Used Bootstrap for ease."
          skills={[
            { name: 'React', type: 'web' },
            { name: 'Next.js', type: 'web' },
            { name: 'Bootstrap', type: 'web' }
          ]}
          links={[
            { type: 'github', link: 'https://github.com/nodebotanist/nodebotanist.github.io' }
          ]}
        />
        <ProjectCard
          name="The Golden Raider"
          type="hardware"
          desc="I overhauled a model of an Imperial Raider and put a Raspeberry Pi Zero W, some RGB LEDs, and a speaker in there. It plays music and lights up!"
          skills={[
            { name: 'Python', type: 'language' },
            { name: 'Raspberry Pi', type: 'hardware' },
          ]}
          links={[
            { type: 'github', link: 'https://github.com/atx-sabine/Golden-Raider-2017' }
          ]}
        />
        <ProjectCard
          name="SX1509-python-raspi"
          type="hardware"
          desc="I wrote a Python library for the SX1509 to go in the Golden Raider-- PWM and digital output works"
          skills={[
            { name: 'Python', type: 'language' },
            { name: 'Raspberry Pi', type: 'hardware' }
          ]}
          links={[
            { type: 'github', link: 'https://github.com/ATX-Sabine/SX1509-WiringPi-Python' }
          ]}
        />
        <ProjectCard
          name="Node-Bus-Pirate"
          type="hardware"
          desc="This library was built to control the Bus Pirate with Node.js. Right now it has I2C and UART Functionality. Working on a tester before making progress."
          skills={[
            { name: 'node-serialport', type: 'hardware' },
            { name: 'Bus Pirate', type: 'hardware' }
          ]}
          links = {[
            {type: 'github', 'link': 'https://github.com/nodebotanist/node-bus-pirate'}
          ]}
        />
        <ProjectCard
          name="Bus-Pirate Tester"
          type="hardware"
          desc="This is an AVR Firmware project I'm writing so I can run hardware tests on the Bus Pirate for the bus-pirate node module"
          skills= {[
            { name: 'AVR C', type: 'hardware' },
            { name: 'Bus Pirate', type: 'hardware' }
          ]}
          links= {[
            { type: 'github', 'link': 'https://github.com/nodebotanist/node-bus-pirate-tester' }
          ]}
        />
        <ProjectCard
          name="The Nodebotanist's Handbook"
          type="writing"
          desc="Just pulling together advice and such based on my myriad of experience, hoping maybe someone will learn from my mistakes."
          skills={[
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
