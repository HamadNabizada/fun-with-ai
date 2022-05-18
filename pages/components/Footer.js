import styles from '../../styles/Footer.module.css'

export default function Footer(props){
    return(
        <div className={styles.wrapper}>
            <input 
                maxLength="150" 
                className={styles.input} 
                type="text" 
                placeholder='Ask a question...'/>
            <button onClick={props.handleClick} className={styles.btn}>&#9993;</button>
        </div>
    )
}