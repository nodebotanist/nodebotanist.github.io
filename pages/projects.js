import Header from '../components/header'
import Project from '../components/project'

import ProjectsData from '../data/projects'

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
          {ProjectsData.map((project, i) => (<Project title={project.title} type={project.type} body={project.body} links={project.links} />))}
       </div>
      </div>
    </>
  )
}