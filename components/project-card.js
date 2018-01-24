class ProjectCard extends React.Component {
  constructor(props){
    super(props)

    let bootstrapClass = 'primary'

    if(props.projectType == 'hardware'){
      bootstrapClass = 'warning'
    }

    this.state = {
      bootstrapClass
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