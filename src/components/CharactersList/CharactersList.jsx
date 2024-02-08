import clsx from 'clsx';
import CharacterTile from '../CharacterTile/CharacterTile';
import styles from './CharactersList.module.scss';
import { v4 as uuidv4 } from 'uuid';

const CharactersList = ({ characters }) => {
  return (
    <section className={clsx('container', styles.charactersListSection)}>
      <h2>Lista wszystkich postaci:</h2>
      <ul className={styles.charactersList}>
        {characters.map((character, index) => (
          <CharacterTile
            character={character}
            isReversed={index % 2}
            key={uuidv4()}
          />
        ))}
      </ul>
    </section>
  );
};

export default CharactersList;
