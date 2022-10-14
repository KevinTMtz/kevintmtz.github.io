import React from 'react';

import { Information } from '../types/types';

interface InformationBoxProps {
  information: Information;
}

const InformationBox = ({ information }: InformationBoxProps) => (
  <div>
    <h3>{information.title}</h3>
    <p>{information.description}</p>
    <ul>
      {information.points.map((point, index) => (
        <li key={`${information.title}Point-${index}`}>{point}</li>
      ))}
    </ul>
  </div>
);

export default InformationBox;
