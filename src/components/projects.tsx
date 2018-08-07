import * as marked from 'marked';
import * as React from 'react';
import { Project } from '../pages/index';

interface Props {
  projects: Project[];
}

export default class Projects extends React.PureComponent<Props> {

  private categorizeProjects = (projects: Project[]) => {
    return {
      open:  projects.filter((project) => project.status === 'open'),
      close: projects.filter((project) => project.status === 'close'),
    };
  }

  private renderItem = (project: Project) => {
    const { name, description } = project;
    const htmlDescription = { __html: marked(description, { breaks: true }) };

    return (
      <li className='project'>
        <span className='project__name'>
          {name}
        </span>

        <p className='project__description' dangerouslySetInnerHTML={htmlDescription} />
      </li>
    );
  }

  public render () {
    const projects = this.categorizeProjects(this.props.projects);

    return (
      <div className='projects'>
        <ul className='projects__list projects__list--open'>
          {
            projects.open.map((project) => this.renderItem(project))
          }
        </ul>

        <h3>Projects in past</h3>
        <ul className='projects__list projects__list--close'>
          {
            projects.close.map((project) => this.renderItem(project))
          }
        </ul>
      </div>
    );
  }
}

