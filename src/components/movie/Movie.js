import styles from './Movie.module.css'
import euyminhavida from '../../img/euyminhavida.jpeg'
import foto0 from '../../img/foto0.jpeg'
import foto1 from '../../img/foto1.jpeg'
import foto2 from '../../img/foto2.jpeg'
import foto3 from '../../img/foto3.jpeg'
import foto4 from '../../img/foto4.jpeg'
import foto5 from '../../img/foto5.jpeg'
import foto6 from '../../img/foto6.jpeg'
import foto7 from '../../img/foto7.jpeg'
import foto8 from '../../img/foto8.jpeg'
import foto9 from '../../img/foto9.jpeg'
import Header from '../layout/Header';
import ContentHeader from '../layout/ContentHeader';
import Episode from '../episode/Episode';
import { GoTriangleDown } from "react-icons/go";
import { useNavigate, useParams } from 'react-router-dom'

const Movie = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const episodes = [
    {
      imgPath: foto0,
      title: "O início",
      duration: "30 min",
      description:
        "O início... O rolê onde tudo começou, aqui mal sabíamos que a vida nos uniria e que seriamos a vida um do outro.",
    },
    {
      imgPath: foto1,
      title: "1 mês",
      duration: "30 min",
      description:
        "O início... O rolê onde tudo começou, mal sabíamos que a vida nos uniria e que iríamos nos amar..",
    },
    {
      imgPath: foto2,
      title: "2 mês",
      duration: "30 min",
      description:
        "atione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto3,
      title: "3 mês",
      duration: "30 min",
      description:
        "atione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto4,
      title: "4 mês",
      duration: "30 min",
      description:
        "atione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto5,
      title: "5 mês",
      duration: "30 min",
      description:
        "atione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto6,
      title: "6 mês",
      duration: "30 min",
      description:
        "atione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto7,
      title: "7 mês",
      duration: "30 min",
      description:
        "atione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto8,
      title: "8 mês",
      duration: "30 min",
      description:
        "atione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: foto9,
      title: "9 mês",
      duration: "30 min",
      description:
        "atione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    },
    {
      imgPath: "../img/foto1.jpeg",
      title: "10 mês",
      duration: "30 min",
      description:
        "atione, maiores tenetur, consequatur ducimus veniam minima temporibus similique neque? Explicabo, inventore delectus",
    }
  ]
  
  const img = id ? episodes[id].imgPath : euyminhavida
  const ep = id ? id : 0
  const title = id ? episodes[id].title : episodes[0].title
  const description = id ? episodes[id].description : episodes[0].description


  const navigateHandler = (id) => {
    navigate(`/movie/${id}`)
    window.location.reload()
  }

    return (
      <div className={styles.movie_container}>
        <div className={styles.img_container}>
          <img src={img} alt="" />
          <Header />
        </div>
        <div className={styles.container}>
          <ContentHeader
           ep={ep}
           title={title}
           description={description}
          />
          <div className={styles.episodes_container}>
            <div className={styles.episodes_header}>
              <h3>Episódios</h3>
              <button>
                Temporada 1 <GoTriangleDown />
              </button>
            </div>
            <div className={styles.episodes}>
              {episodes.map((episode, index) => (
                  <Episode
                    id={id}
                    navigate={navigateHandler}
                    key={index}
                    index={index}
                    title={episode.title}
                    duration={episode.duration}
                    description={episode.description}
                    photo={episode.imgPath}
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Movie