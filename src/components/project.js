import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div class="project">
                <a className="projectTitle" href={this.props.projectLink}>{this.props.projectTitle}</a>
                <p className="projectDescription">{this.props.projectDescription}</p>
            </div>
        )
    }
}

export default Project;