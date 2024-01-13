import { useState } from 'react';
import React from 'react';

let nextId = 0;
export default function SingleProduit() {
  const [name, setName] = useState('');
  
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Sculpteurs inspirants :</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Ajouter</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name} {artist.idd}</li>
        ))}
      </ul>
    </>
  );
}
