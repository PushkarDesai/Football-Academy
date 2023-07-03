import React from 'react';
import './ChStyle.css';

const Coaches = () => {
  const coachesData = [
    {
      name: 'John Doe',
      qualification: 'UEFA Pro License',
      experience: '10+ years',
      specialty: 'Tactical Training',
      photo: 'https://cdn.dribbble.com/users/4001310/screenshots/8574876/custom___1.png',
    },
    {
      name: 'Jane Smith',
      qualification: 'UEFA A License',
      experience: '8 years',
      specialty: 'Player Development',
      photo: 'https://cdn.dribbble.com/users/4001310/screenshots/8574876/custom___1.png',
    },
    {
      name: 'Mike Johnson',
      qualification: 'UEFA B License',
      experience: '5 years',
      specialty: 'Technical Skills',
      photo: 'https://cdn.dribbble.com/users/4001310/screenshots/8574876/custom___1.png',
    },
  ];

  return (
    <div className="coaches">
      <h1>Our Coaches</h1>
      <div className="coach-list">
        {coachesData.map((coach, index) => (
          <div className="coach" key={index}>
            {/* <img src={require(`https://cdn.dribbble.com/users/4001310/screenshots/8574876/custom___1.png`).default} alt={coach.name} /> */}
            <div className="coach-details">
              <h2>{coach.name}</h2>
              <p>Qualification: {coach.qualification}</p>
              <p>Experience: {coach.experience}</p>
              <p>Specialty: {coach.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaches;
