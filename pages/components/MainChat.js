import styles from '../../styles/MainChat.module.css'
import Message from './Message'

export default function MainChat(props){

  let messageElements = props.messages.map(item =>{
    return <Message key={item.id} {...item}/>
  })

  
  return(
      <div className={styles.wrapper}>
        {messageElements}
      </div>
  )
}