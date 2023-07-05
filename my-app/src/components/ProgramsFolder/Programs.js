import React from 'react';
import './PrStyle.css';
// import program1Image from '../../assets/program1.jpg';
// import program2Image from '../../assets/program2.jpg';
// import program3Image from '../../assets/program3.jpg';

const Programs = () => {
  const programsData = [
    {
      title: 'Youth Training',
      description:
        'Our youth training program focuses on developing fundamental skills and techniques for young players. We provide a supportive and structured environment to nurture their passion for the game.',
      image: 'https://cdn.dribbble.com/users/4001310/screenshots/8574876/custom___1.png'
    },
    {
      title: 'Skill Development',
      description:
        'Our skill development program is designed for players of all ages and skill levels who want to enhance their technical abilities. Our experienced coaches provide personalized training to help players reach their full potential.',
      image: 'https://cdn.dribbble.com/users/4001310/screenshots/8574876/custom___1.png',
    },
    {
      title: 'Summer Camps',
      description:
        'Join our exciting summer camps for an immersive football experience. Participants will engage in skill-building exercises, friendly matches, and fun activities while making lasting memories.',
      image: 'https://cdn.dribbble.com/users/4001310/screenshots/8574876/custom___1.png',
    },
  ];

  return (
    <div className="programs">
      <h1>OUR PROGRAMS</h1>
      <div className="program-list">
        {programsData.map((program, index) => (
          <div className="program" key={index}>
            <img src='https://cdn.dribbble.com/users/4001310/screenshots/8574876/custom___1.png' alt={program.title} />
            <div className="program-details">
              <h2>{program.title}</h2>
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
