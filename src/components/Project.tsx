import React from 'react';

import { ProjectInfo } from '../types/types';

interface ProjectProps {
  project: ProjectInfo;
}

const Project: React.FC<ProjectProps> = ({ project }: ProjectProps) => (
  <div className='projectDiv'>
    <div
      className='projectNameDiv'
      style={{
        backgroundImage: `url(${project.imagePath})`,
      }}
    >
      <div className='projectTitleDiv'>
        <h2 className='projectName'>{project.name}</h2>
      </div>
    </div>
    <div className='projectDescription'>
      <p>{project.description}</p>
      <ul>
        {project.points.map((point, index) => (
          <li key={`${project.name}Point-${index}`}>{point}</li>
        ))}
      </ul>
      <p>
        <strong>Technologies:</strong> {project.technologies}
      </p>
      <div className='projectLinks'>
        {project.githubUrl && (
          <a href={project.githubUrl} target='_blank' rel='noreferrer'>
            Github
          </a>
        )}
        {project.webpageUrl && (
          <a href={project.webpageUrl} target='_blank' rel='noreferrer'>
            Website
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Project;
