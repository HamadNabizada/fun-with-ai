import styles from '../../styles/MainChat.module.css'
import Message from './Message'

export default function MainChat(props){
  let messages = props.messages
  let messageElements = messages.map(item =>{
    return <Message key={item.id} {...item}/>
  })

  
  return(
      <div className={styles.wrapper}>
        {messageElements}
      </div>
  )
}