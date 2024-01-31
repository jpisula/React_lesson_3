import { useEffect, useState } from 'react';
import Header from './components/Header/Header';

const API_URL = 'https://narutodb.xyz/api';

const getAllCharacters = async () => {
  return fetch(`${API_URL}/character?page=1&limit=50`).then((resp) =>
    resp.json()
  );
};

function App() {
  const [charactersData, setCharactersData] = useState({});
  const [searchedCharacter, setSearchedCharacter] = useState('');

  useEffect(() => {
    getAllCharacters()
      .then((data) => setCharactersData(data))
      .catch((e) => {
        console.warn(e);
      });
  }, []);

  console.log(charactersData);

  return (
    <div className='app'>
      <Header />
      <main>
        <ul></ul>
      </main>
    </div>
  );
}

export default App;
