import React, { useState } from 'react';
import About from './About';
import './Action.css'; // Import your CSS file

const cardsData = [
  {
    heading: 'DRIVE READY',
    image: 'https://technicalhub.io/img/1920x1080/driveready.jpeg',
    description: 'Explore the realm of cutting-edge technologies all in one spot at DRIVE READY CONNECT, exclusively designed for our trainees. Stay engaged and enjoy an unparalleled learning journey with the training provided by Technical Hub. Witness the 20+ technologies at one place and its featured explained by our certified trainees of the respective technologies..',
    animationStyle: 'pluse', // Optional animation style
  },
  {
    heading: 'OWL CODER',
    image: 'https://i.ytimg.com/vi/kkBQQ9njcJA/maxresdefault.jpg',
    description: 'Owl coder is an Innovative Training Program of 60 days which enhances trainees on Coding skills like Data Structures and Algorithms, Problem solving skills, Aptitude, Reasoning and Soft skills. This training happens from 4.00p.m to 12.00a.m. Trainees are given awareness on Interview skills and conducted Mock interviews on both Technical and HR rounds',
    animationStyle: 'pluse', // Optional animation style
  },
  {
    heading: 'PROJECT SPACE',
    image: 'https://technicalhub.io/updated_news/ps.png',
    description: 'Project space is a feature rich environment designed to encourage individuals to develop and showcase real-time problems and further find effective solutions that can help overcome them. Every individual who chooses to utilize this space pockets themselves a chance that could possibly get them one step closer to their dream job',
    animationStyle: 'pluse', // Optional animation style
  },
  {
    heading: 'BECOME CODER',
    image: 'https://media.licdn.com/dms/image/D5622AQF7A3hx05PtWA/feedshare-shrink_800/0/1702897944775?e=1713398400&v=beta&t=Hn4xizR8-zCUhHa5f4Kr_PZbTcwG9sDNUyFP6rmTIJM',
    description: 'Our competitive coding program allows our trainees to prepare themselves for interview related coding tests. Attendees of the program are trained to solve complex problems in short periods of time.where aspiring software engineers sharpen their skills to excel in technical interviews',
    animationStyle: 'pluse', // Optional animation style
  },
];

const Card = ({ heading, image, description, animationStyle = 'flip' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const animationClass = `card ${isHovered && `card--${animationStyle}`}`; // Dynamically apply animation class

  return (
    <div className={animationClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={image} alt={heading} className="card__image" />
      <div className="card__content">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

function Action() {
  return (
    <div className='containerFluid'>
    <div className="card-container" >
      {cardsData.map((card, index) => (
        <Card key={index} {...card} /> // Spread card object properties
      ))}
    </div>
    <About/>
    </div>
    
  );
  
}

export default Action;
