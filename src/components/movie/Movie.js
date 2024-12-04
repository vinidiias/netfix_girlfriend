import styles from './Movie.module.css'
import netflix_logo from '../../img/netflix_logo.png'
import { BsBadgeHd } from "react-icons/bs";
import { FaAd } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import Header from '../layout/Header';

const Movie = () => {
    return (
      <div className={styles.movie_container}>
        <Header />
        <div className={styles.content}>
            <div className={styles.content_left}>
                <div className={styles.infos}>
                    <p>2024 Minissérie</p>
                    <BsBadgeHd />
                    <FaAd />
                </div>
                <div className={styles.warning}>
                    <IoIosWarning />
                    <p>Contém muito amor</p>
                </div>
                <div className={styles.description}>
                    <h3><span>T1:E1</span> "29 de setembro"</h3>
                    <p>O início... O rolê onde tudo começou, mal sabíamos que a vida nos uniria e que iríamos nos amar.</p>
                </div>
            </div>
            <div className={styles.content_right}>
                <div className={styles.elencos}>
                 <p>Elenco: <span>Vinícius Dias, Camilli Peixoto</span></p>
                 <p>Gênero:<span> Romântico, Brasileiros, Documentários</span></p>
                 <p>Cenas e momentos: <span>Emocionantes, românticos</span></p>
                </div>
            </div>
        </div>
        <div className={styles.episodes}>

        </div>
      </div>
    );
}

export default Movie