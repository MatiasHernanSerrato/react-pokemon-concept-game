export const bulbasurSRC =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png';

export const charmanderSRC =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png';

export const fetchMainCharacter = (API) =>
  fetch(API).then((response) => response.json());
