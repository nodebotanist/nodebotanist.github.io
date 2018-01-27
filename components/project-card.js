class ProjectCard extends React.Component {
  constructor (props) {
    super(props)

    this.classMap = {
      'hardware': 'warning'
    }

    this.linkMap = {
      github: 'github-alt',
      gitbook: 'book'
    }

    this.state = {
      test: true,
      projectType: props.projectType,
      bootstrapClass: this.classMap[props.projectType] || 'primary',
      skills: props.projectSkills,
      links: props.links
    }
  }
  render () {
    const skillsList = this.state.skills.map((skill) => {
      return <span className={`project-skill-label label label-${this.classMap[skill.type]}`}>{skill.name}</span>
    })

    const linksList = this.state.links.map((link) => {
      return <a target="_blank" href={link.link}><i className={`fa fa-${this.linkMap[link.type]} fa-lg project-link-${link.type}`}/></a>
    })

    return (
      <div className="col-lg-4">
        <div className={`panel panel-${this.state.bootstrapClass}`}>
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.projectName}</h3>
          </div>
          <div className="panel-body">
            <p>{this.props.projectDesc}</p>
            <p>Skills Used:</p>
            <p>{skillsList}</p>
          </div>
          <div className="panel-footer">
            <p>{linksList}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard
