import styles from '../styles/Message.module.css'

export default function Message(props){

    return(
        <div className={(props.sender === 'me') ? styles.wrapperMe : styles.wrapperAI}>
            <p>{props.message}</p>
        </div>
    )
}