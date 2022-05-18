import styles from '../../styles/Footer.module.css'

export default function Footer(){
    return(
        <div className={styles.wrapper}>
            <input 
                maxLength="150" 
                className={styles.input} 
                type="text" 
                placeholder='Ask a question...'/>
            <button className={styles.btn}>&#9993;</button>
        </div>
    )
}