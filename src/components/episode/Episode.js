import { useState } from 'react'
import styles from './Episode.module.css'

const Episode = ({ index, title, duration, description, photo, navigate, id }) => {
   
    const navigateHandler = () => {  
      navigate(index)
    }

    const isSelected = parseInt(id) === index ? 'selected' : '';

    const [over, setOver] = useState('')

    return (
      <div
        className={`${styles.episode} ${styles[over]} ${styles[isSelected]}`}
        onClick={navigateHandler}
        onMouseEnter={() => setOver('over')}
        onMouseLeave={() => setOver('')}
      >
        <h3>{index}</h3>
        <img src={photo} alt="" />
        <div className={styles.infoEpisode}>
          <div className={styles.title}>
            <h3>{title}</h3>
            <p>{duration}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    );
}

export default Episode