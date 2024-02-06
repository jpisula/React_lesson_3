import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/getCharacterById';

const CharacterPage = () => {
  const [character, setCharacter] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCharacterById(id)
      .then((data) => setCharacter(data))
      .catch((e) => navigate('/'));
  }, [id, navigate]);

  if (!character) {
    return null;
  }

  return (
    <div className='container'>
      <h2>Witaj {character.name}</h2>
      <Link to='/'>Wróć na stronę główną</Link>
    </div>
  );
};

export default CharacterPage;
