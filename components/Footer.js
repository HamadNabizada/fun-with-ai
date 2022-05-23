import styles from '../styles/Footer.module.css'

export default function Footer(props){
    function submitPrompt(e){
        if(e.key === 'Enter'){
            props.handleClick()
        }
    }
    return(
        <div className={styles.wrapper}>
            <input
                value={props.prompt}
                onKeyDown={submitPrompt}
                onChange={props.handleChange} 
                className={styles.input} 
                type="text" 
            />
            <button onClick={props.handleClick} className={styles.btn}>&#9993;</button>
        </div>
    )
}