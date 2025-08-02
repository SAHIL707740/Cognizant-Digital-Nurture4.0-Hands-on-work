import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 82 },
    { name: 'Rohit Sharma', score: 45 },
    { name: 'KL Rahul', score: 70 },
    { name: 'Rishabh Pant', score: 60 },
    { name: 'Hardik Pandya', score: 88 },
    { name: 'Shikhar Dhawan', score: 67 },
    { name: 'Shreyas Iyer', score: 30 },
    { name: 'Jasprit Bumrah', score: 90 },
    { name: 'Ravindra Jadeja', score: 75 },
    { name: 'Yuzvendra Chahal', score: 55 },
    { name: 'Bhuvneshwar Kumar', score: 72 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((player, index) => (
        <p key={index}>{player.name} - Score: {player.score}</p>
      ))}

      <h2>Players with Score Below 70</h2>
      {filteredPlayers.map((player, index) => (
        <p key={index}>{player.name} - Score: {player.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
