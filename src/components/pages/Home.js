import Movie from '../movie/Movie'
import styles from './Home.module.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

const Home = () => {
    return (
      <BrowserRouter>
          <div className={styles.home_container}>
            <Routes>
                <Route path='/' element={<Movie />} />
                <Route path='/movie/:id' element={<Movie />} />
            </Routes>
          </div>
      </BrowserRouter>
    );
}

export default Home