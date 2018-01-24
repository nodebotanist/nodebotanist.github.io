class ProjectCard extends React.Component {
  constructor(props){
    super(props)

    this.classMap = {
      'hardware': 'warning'
    }

    this.state = {
      bootstrapClass: this.classMap[props.projectType] || 'primary'
    }
  }
  render(){
    return (
      <div className="col-lg-4">
        <div className={`panel panel-${this.state.bootstrapClass}`}>
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.projectName}</h3>
          </div>
          <div className="panel-body">
            <p>{this.props.projectDesc}</p>
            <p>(tags placeholder)</p>
          </div>
          <div className="panel-footer">
            <p>(links placeholder)</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard