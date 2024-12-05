import styles from './ContentHeader.module.css'
import { BsBadgeHd } from "react-icons/bs";
import { FaAd } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io"

const ContentHeader = ({ ep, title, description }) => {
    return (
        <div className={styles.content_header}>
        <div className={styles.content_left}>
            <div className={styles.subtitle}>
                <h2>Nossa História</h2>
            </div>
            <div className={styles.infos}>
                <p>2024 Série</p>
                <BsBadgeHd />
                <FaAd />
            </div>
            <div className={styles.warning}>
                <IoIosWarning />
                <p>Contém muito amor</p>
            </div>
            <div className={styles.description}>
                <h3><span>T1:{ep}</span> "{title}"</h3>
                <p>{description}</p>
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
    )
}

export default ContentHeader