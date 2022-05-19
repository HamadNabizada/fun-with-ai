import styles from '../../styles/MainChat.module.css'
import Message from './Message'

export default function MainChat(props){
  console.log(props.messages);
  let messageElements = props.messages.map(item =>{
    return <Message key={item.id} {...item}/>
  })

  
  return(
      <div className={styles.wrapper}>
        {messageElements}
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
        <Message message='blablablab'/>
      </div>
  )
}