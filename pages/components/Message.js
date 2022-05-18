import styles from '../../styles/Message.module.css'

export default function Message(props){
    console.log(props);
    return(
        <div className={styles.wrapperAI}>
            <p>{props[0].message}</p>
        </div>
    )
}