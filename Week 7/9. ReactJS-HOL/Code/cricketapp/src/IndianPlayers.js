import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ['Virat', 'KL', 'Pant', 'Hardik', 'Iyer'];
  const evenPlayers = ['Rohit', 'Shikhar', 'Jadeja', 'Chahal', 'Bhuvi'];

  const [t1, t2, t3, t4, t5] = oddPlayers;
  const [e1, e2, e3, e4, e5] = evenPlayers;

  const T20players = ['Surya', 'Gill'];
  const RanjiTrophyplayers = ['Pujara', 'Rahane'];

  const mergedPlayers = [...T20players, ...RanjiTrophyplayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{t1}</li>
        <li>{t2}</li>
        <li>{t3}</li>
        <li>{t4}</li>
        <li>{t5}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{e1}</li>
        <li>{e2}</li>
        <li>{e3}</li>
        <li>{e4}</li>
        <li>{e5}</li>
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
