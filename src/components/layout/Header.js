import styles from './Header.module.css'
import { FaInfinity } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { SiNetflix } from "react-icons/si";
import { AiOutlineLike } from "react-icons/ai";

const Header = () => {
    return (
        <div className={styles.header}>
          <div className={styles.logo}>
            <SiNetflix />
            <p>SÉRIES</p>
          </div>
          <div className={styles.title}>
            <h1>NOSSA HISTÓRIA</h1>
          </div>
          <div className={styles.progress}>
            <hr />
            <p>10 de <FaInfinity/> meses</p>
          </div>
          <div className={styles.btns}>
            <button><FaPlay/> Assistir</button>
            <IoIosAddCircleOutline />
            <AiOutlineLike />
          </div>
        </div>
    )
}

export default Header