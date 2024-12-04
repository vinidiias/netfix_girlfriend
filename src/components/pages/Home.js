import Movie from '../movie/Movie'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home_container}>
            <Movie />
        </div>
    )
}

export default Home