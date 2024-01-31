import clsx from 'clsx';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={clsx('container', styles.header)}>
      <h1>Witaj w świecie Naruto!</h1>
      <h2>Jesteś ciekaw(a) tego świata? Zapraszamy!</h2>
    </header>
  );
};

export default Header;
