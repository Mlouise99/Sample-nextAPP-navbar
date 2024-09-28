import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li style={styles.li}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li style={styles.li}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '10px',
    backgroundColor: '#333',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  li: {
    color: 'white',
  },
};

export default Navbar;