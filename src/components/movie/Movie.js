import styles from './Movie.module.css'
import euyminhavida from '../../img/euyminhavida.jpeg'
import foto1 from '../../img/foto1.jpeg'
import Header from '../layout/Header';
import ContentHeader from '../layout/ContentHeader';
import Episode from '../episode/Episode';
import { GoTriangleDown } from "react-icons/go";

const Movie = () => {
  const episodes = [
    {
      imgPath: foto1,
      title: "1 mês",
      duration: "30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto1,
      title: "2 mês",
      duration: "30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto1,
      title: "3 mês",
      duration: "30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto1,
      title: "4 mês",
      duration: "30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto1,
      title: "5 mês",
      duration: "30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto1,
      title: "6 mês",
      duration: "30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto1,
      title: "7 mês",
      duration: "30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto1,
      title: "8 mês",
      duration: "30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto1,
      title: "9 mês",
      duration: "30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: "../img/foto1.jpeg",
      title: "10 mês",
      duration: "30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fuga cum. Dolor possimus mollitia nemo ratione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    }
  ]

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
              {episodes.map((episode, index) => (
                <>
                  <Episode
                    index={index}
                    title={episode.title}
                    duration={episode.duration}
                    description={episode.description}
                    photo={episode.imgPath}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Movie