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
import foto10 from '../../img/foto10.jpeg'
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
        "Um mês de muito amor, treinos e idas ao janela. Aqui já nos amavámos muitos um ao outro e começamos a comer sushi juntos.",
    },
    {
      imgPath: foto2,
      title: "2 mês",
      duration: "30 min",
      description:
        "Aqui você operou o siso virando o fofão e tive que cuidar da minha vida quase o mês todo, mas fomos ao show do cover de system na casa urbana.",
    },
    {
      imgPath: foto3,
      title: "3 mês",
      duration: "30 min",
      description:
        "Um mês legal e tranquilo, fomos passear em med city com a sogra, treinamos bastante e teve pizz e chopp na academia, very good.",
    },
    {
      imgPath: foto4,
      title: "4 mês",
      duration: "30 min",
      description:
        "Passamos alguns dias de casados enquanto os sogros viajavam e também assistimos divertidamente no carro com pizza  pra comemorar minha bolsa.",
    },
    {
      imgPath: foto5,
      title: "5 mês",
      duration: "30 min",
      description:
        "Mês que minha vida operou e tive que cuidar novamente dela, mas aproveitamos antes indo almoçar no py e fomos à festa junina da rino.",
    },
    {
      imgPath: foto6,
      title: "6 mês",
      duration: "30 min",
      description:
        "Muitos vinhos e comemos yakisoba e muito sushi no nosso dia e batemos um strogonoff no ru nuu.",
    },
    {
      imgPath: foto7,
      title: "7 mês",
      duration: "30 min",
      description:
        "Mês muito bom, saímos bastante juntos, jóiamos e tudo mais. Te amo <3...",
    },
    {
      imgPath: foto8,
      title: "8 mês",
      duration: "30 min",
      description:
        "Te levei pra conhecer o sudacas bar pra julgarmos e foi legal e estávamos bem felizes pelo meu estágio e por comprarmos nossa primeira viagem juntos. Te amo de novo",
    },
    {
      imgPath: foto9,
      title: "9 mês",
      duration: "30 min",
      description:
        "Pouco tenso mas sempre unidos do jeito que somos. Nos divertimos na cachu também. Te amo minha vida",
    },
    {
      imgPath: foto10,
      title: "10 mês",
      duration: "30 min",
      description:
        "Estamos aqui hoje completando 10 meses juntos e quero que saiba que sempre te amarei. Obrigado por ser essa pessoa maravilhosa comigo, você me fala um homem muito mais feliz e amado. Te amo muito muito muito my lover",
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