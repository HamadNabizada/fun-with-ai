import styles from '../../styles/MainChat.module.css'
import Message from './Message'

export default function MainChat(props){
  let messages = props.messages
  let messagesLength = messages.length
  let messageElements = []
  
  for (let i = 0; i < messagesLength; i++) {
    const currentMessage = messages[i];
    messageElements.push(<Message key={currentMessage.id} {...currentMessage}/>)
  }
  
  return(
      <div className={styles.wrapper}>
        {messageElements}
      </div>
  )
}