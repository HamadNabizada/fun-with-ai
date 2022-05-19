import styles from '../../styles/MainChat.module.css'
import Message from './Message'

export default function MainChat(props){
  let messages = props.messages
  let messageElements = []
  
  for (let i = 0; i < messages.length; i++) {
    const currentMessage = messages[i];
    messageElements.push(<Message key={currentMessage.id} {...currentMessage}/>)
  }
  
  return(
      <div className={styles.wrapper}>
        {messageElements}
      </div>
  )
}