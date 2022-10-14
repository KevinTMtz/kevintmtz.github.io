import React from 'react';

interface BadgeProps {
  text: string;
  imagePath: string;
  alt: string;
}

const Badge: React.FC<BadgeProps> = (props: BadgeProps) => (
  <div>
    <p>{props.text}</p>
    <img src={props.imagePath} alt={props.alt} />
  </div>
);

export default Badge;
