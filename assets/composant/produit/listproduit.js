import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {

//    state(éta , données)
  const [artists, setArtists] = useState(
    initialArtists
  );
//  comportements



//3) afficher (render)
  return (
    <>
      <h1>Sculpteurs inspirants :</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}