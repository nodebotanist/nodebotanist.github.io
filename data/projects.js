const ProjectsData = [
  {
    title: 'My Portfolio',
    type: 'primary',
    body: () => (  
      <>                
        <p>This portfolio was built on:</p>
        <ul>
          <li>React</li>
          <li>Next.JS</li>
          <li>Bootstrap</li>
          <li>Bootswatch Cyborg Theme</li>
        </ul>
        <p>and hosted on GitHub Pages</p>
      </>
    ),
    links: [
      {icon: 'github', href: 'https://github.com/nodebotanist/nodebotanist.github.io'}
    ]
  },
  {
    title: `Note-detecting Light-Up Bass v1`,
    type: `success`,
    body: () => (
      <>
        <p>I built a bass that I debuted at DotJS that detected the note being played and lit up the "color" of the note.</p>
        <p>The tech I used was:</p>
        <ul>
          <li>Raspberry Pi</li>
          <li>Fadecandy</li>
          <li>Node.JS</li>
          <li>Analog sound to MIDI converter</li>
        </ul>
        <p>Links to the GitHub repo and the talk from DotJS below.</p>
      </>
    ),
    links: [
      {icon: 'github', href: 'https://github.com/nodebotanist/dotJS-2019/tree/master/band-code/bass'},
      {icon: 'youtube', href: '#'}
    ]
  },
  {
    title: 'Moddable contributor',
    type: 'success',
    body: () => (
      <>
        <p>I helped write a patch that added a timeout to I2C operations for certain devices.</p>
      </>
    ),
    links: [
      {icon: 'github', href:'https://github.com/Moddable-OpenSource/moddable/pull/271#event-3067718343'}
    ]
  }
]

export default ProjectsData