import styles from '../../styles/MainChat.module.css'
import Message from './Message'

export default function MainChat(props){
  console.log(props);
    return(
        <div className={styles.wrapper}>
          <Message {...props}/>
        </div>
    )
}