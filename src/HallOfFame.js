import React from 'react';

const HallOfFame = () => {
  const students = [
    {
      name: 'John Doe',
      description: 'Top student in Computer Science with a passion for AI.',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/johndoe',
    },
    {
      name: 'Jane Smith',
      description: 'Outstanding performer in Data Science and Machine Learning.',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/janesmith',
    },
    {
      name: 'Alice Johnson',
      description: 'Exceptional talent in Software Development and Project Management.',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/alicejohnson',
    },
    {
      name: 'Bob Brown',
      description: 'Leading student in Cybersecurity with several certifications.',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/bobbrown',
    },
    {
      name: 'Charlie Wilson',
      description: 'Expert in Cloud Computing and DevOps with hands-on experience.',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/charliewilson',
    },
    {
      name: 'Diana Ross',
      description: 'Pioneering research in Quantum Computing and its applications.',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/dianaross',
    },
    {
      name: 'Edward Lewis',
      description: 'Leader in Artificial Intelligence research and development.',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/edwardlewis',
    },
    {
      name: 'Fiona Clark',
      description: 'Innovative thinker in Blockchain technology and FinTech solutions.',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/fionaclark',
    },
    {
      name: 'George Walker',
      description: 'Top performer in Embedded Systems and IoT technologies.',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/georgewalker',
    },
    {
      name: 'Hannah Davis',
      description: 'Excellent student in Data Analytics and Business Intelligence.',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/hannahdavis',
    },
  ];

  return (
      <div className="flex flex-wrap justify-center">
        {students.map((student, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex">
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col">
                <img className="w-full" src={student.image} alt={`${student.name}'s profile`} />
                <div className="px-6 py-4 flex-grow">
                  <div className="font-bold text-xl mb-2">{student.name}</div>
                  <p className="text-gray-700 text-base">{student.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a href={student.linkedin} target="_blank" rel="noopener noreferrer"
                     className="text-blue-500 hover:underline">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
        ))}
      </div>
  );
};

export default HallOfFame;
