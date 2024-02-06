import { Link } from 'react-router-dom';
import { loremImgSrc } from '../../constants/constants';
import styles from './CharacterTile.module.scss';

const CharacterTile = ({ character }) => {
  return (
    <li className={styles.characterTile}>
      <img src={character.images[0] || loremImgSrc} alt={character.name} />
      <div>
        <h3>{character.name}</h3>
        <Link to={`/character/${character.id}`}>Czytaj więcej</Link>
      </div>
    </li>
  );
};

export default CharacterTile;
