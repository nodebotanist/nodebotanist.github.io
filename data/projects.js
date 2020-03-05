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

  }
]

export default ProjectsData