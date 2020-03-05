export default function Project(props) {
  return (
    <div className="col-lg-6">
    <div className={`card border-${props.type}`}>
        <div className="card-header"><h4 className={`text-${props.type}`}>{props.title}</h4></div>
        <div className="card-body">
          <div className="card-text">
            {props.body()}
          </div>
          <ul class="project-links">
            {props.links.map((link, i) => (
              <li><a className={`icofont-${link.icon} icofont-2x`} target="_" href={link.href}></a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}