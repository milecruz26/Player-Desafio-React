import styles from './Header.module.css'
import Logo from '../../assets/logo.svg';
import Profile from '../../assets/profile.jpg';

export default function Header() {

  return (
    <div>
      <header className={styles.headerContainer}>
        <div>
          <img src={Logo} alt="logo cubos player" className={styles.logo} />
        </div>
        <div className={styles.welcome}>
          <img src={Profile}
            alt="Foto perfil"
            className={styles.profileImage}
          />
          <h1 className={styles.h1}>
            Bem vindo, Jamile!
          </h1>
        </div>
      </header>
      <hr className={styles.hr} />
    </div>
  )
}