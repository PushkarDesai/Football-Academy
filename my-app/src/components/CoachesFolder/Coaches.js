import React from 'react';
import './ChStyle.css';
import coach1 from '../../assets/coach1.jpg';
import coach2 from '../../assets/coach2.jpg';
import coach3 from '../../assets/coach3.jpg';

const Coaches = () => {
  const coachesData = [
    {
      name: 'Khalid Jamil',
      qualification: 'AFC Pro License',
      experience: '10+ years',
      specialty: 'Tactical Training',
      photo: coach1,
    },
    {
      name: 'Ryan Roy Shah',
      qualification: 'AFC A License',
      experience: '8 years',
      specialty: 'Player Development',
      photo: coach2,
    },
    {
      name: 'Santosh Kashyap',
      qualification: 'AFC A License',
      experience: '10 years',
      specialty: 'Technical Skills',
      photo: coach3,
    },
  ];

  return (
    <div className="coaches">
      <h1>OUR COACHES</h1>
      <div className="coach-list">
        {coachesData.map((coach, index) => (
          <div className="coach" key={index}>
            <img src={coach.photo} alt={coach.name} />
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
