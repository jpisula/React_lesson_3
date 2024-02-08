import { useEffect, useState } from 'react';
import { getAllCharacters } from '../../services/getAllCharacters';
import { getCharacterByName } from '../../services/getCharacterByName';
import Header from '../../components/Header/Header';
import CharactersList from '../../components/CharactersList/CharactersList';
import ServicesList from '../../components/ServicesList/ServicesList';
import { services } from './config';

const HomePage = () => {
  const [charactersData, setCharactersData] = useState();

  useEffect(() => {
    getAllCharacters()
      .then((data) => setCharactersData(data))
      .catch((e) => {
        console.warn(e);
      });
  }, []);

  const handleCharacterSearch = (name) => {
    if (name === '') {
      getAllCharacters()
        .then((data) => setCharactersData(data))
        .catch((e) => {
          console.warn(e);
        });
    } else {
      getCharacterByName(name).then((data) =>
        setCharactersData({ characters: [data] })
      );
    }
  };

  if (!charactersData) {
    return null;
  }

  return (
    <div className='app'>
      <Header handleCharacterSearch={handleCharacterSearch} />
      <main>
        {/* <CharactersList characters={charactersData.characters} /> */}
        <ServicesList services={services} />
      </main>
    </div>
  );
};

export default HomePage;
