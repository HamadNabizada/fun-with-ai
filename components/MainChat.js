import styles from '../styles/MainChat.module.css'
import Message from './Message'
import {useEffect, useRef} from 'react'

export default function MainChat(props){
  let messages = props.messages
  let messagesLength = messages.length
  let messageElements = []
  
  for (let i = 0; i < messagesLength; i++) {
    const currentMessage = messages[i];
    messageElements.push(<Message key={currentMessage.id} {...currentMessage}/>)
  }
  let bottomChat = useRef(null)
  useEffect(()=>{
    bottomChat.current.scrollIntoView()
  },[messageElements])
  return(
      <div className={styles.wrapper}>
        {messageElements}
        <div ref={bottomChat}></div>
      </div>
  )
}