import styles from '../../styles/Footer.module.css'

export default function Footer(){
    return(
        <div className={styles.wrapper}>
            <input className={styles.input} type="text" />
            <button className={styles.btn}>&#9993;</button>
        </div>
    )
}