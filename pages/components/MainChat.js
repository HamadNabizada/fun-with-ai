import styles from '../../styles/MainChat.module.css'
import Message from './Message'

export default function MainChat(props){

    return(
        <div className={styles.wrapper}>
          <Message {...props}/>
        </div>
    )
}