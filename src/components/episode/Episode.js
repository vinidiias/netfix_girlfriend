import styles from './Episode.module.css'

const Episode = ({ index, title, duration, description, photo }) => {
  console.log(photo)
    return (
      <div className={styles.episode}>
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