import clsx from 'clsx';
import styles from './Header.module.scss';
import { useState } from 'react';

const Header = ({ handleCharacterSearch }) => {
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const handleSearch = () => {
    handleCharacterSearch(search);
  };

  return (
    <header className={clsx('container', styles.header)}>
      <h1>Witaj w świecie Naruto!</h1>
      <h2>Jesteś ciekaw(a) tego świata? Zapraszamy!</h2>
      <div className={styles.headerSearch}>
        <h3>Wyszukaj postać:</h3>
        <input
          onChange={handleInputChange}
          type='text'
          placeholder='np. Naruto Uzumaki'
        />
        <button onClick={handleSearch}>Szukaj</button>
      </div>
    </header>
  );
};

export default Header;
