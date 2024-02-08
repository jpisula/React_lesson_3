import { Link } from 'react-router-dom';
import { loremImgSrc } from '../../constants/constants';
import styles from './CharacterTile.module.scss';
import clsx from 'clsx';

const CharacterTile = ({ character, isReversed }) => {
  return (
    <li
      className={clsx(styles.characterTile, isReversed && styles.reversedTile)}
    >
      <img src={character.images[0] || loremImgSrc} alt={character.name} />
      <div>
        <h3>{character.name}</h3>
        <Link to={`/character/${character.id}`}>Czytaj więcej</Link>
      </div>
    </li>
  );
};

export default CharacterTile;
