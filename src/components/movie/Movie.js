import styles from './Movie.module.css'
import euyminhavida from '../../img/euyminhavida.jpeg'
import Header from '../layout/Header';
import ContentHeader from '../layout/ContentHeader';
import foto1 from '../../img/foto1.jpeg'

import { GoTriangleDown } from "react-icons/go";


const Movie = () => {
    return (
      <div className={styles.movie_container}>
        <div className={styles.img_container}>
          <img src={euyminhavida} alt="" />
          <Header />
        </div>
        <div className={styles.container}>
          <ContentHeader />
          <div className={styles.episodes_container}>
            <div className={styles.episodes_header}>
              <h3>Episódios</h3>
              <button>
                Temporada 1 <GoTriangleDown />
              </button>
            </div>
            <div className={styles.episodes}>
              <div className={styles.episode}>
                <img src={foto1} alt="" />
                <div className={styles.infoEpisode}>
                  <h3>2 meses - 10 março</h3>
                  <p>Duração: 1 mês</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus.</p>
                </div>
              </div>
              <div className={styles.episode}>
                <img src={foto1} alt="" />
                <div className={styles.infoEpisode}>
                  <h3>2 meses - 10 março</h3>
                  <p>Duração: 1 mês</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus.</p>
                </div>
              </div>
              <div className={styles.episode}>
                <img src={foto1} alt="" />
                <div className={styles.infoEpisode}>
                  <h3>2 meses - 10 março</h3>
                  <p>Duração: 1 mês</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus.</p>
                </div>
              </div>
              <div className={styles.episode}>
                <img src={foto1} alt="" />
                <div className={styles.infoEpisode}>
                  <h3>2 meses - 10 março</h3>
                  <p>Duração: 1 mês</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus.</p>
                </div>
              </div><div className={styles.episode}>
                <img src={foto1} alt="" />
                <div className={styles.infoEpisode}>
                  <h3>2 meses - 10 março</h3>
                  <p>Duração: 1 mês</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
}

export default Movie