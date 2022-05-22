import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header(props){
    let linkContacts = (            
    <Link href='/allContacts'>
        <a className={styles.allMessages}>&#x3c; All Contacts</a>
    </Link>
    )
    let linkElement = props.onAllContacts ? '' : linkContacts
    
    return(
        <div className={props.onAllContacts ? styles.wrapperContacts : styles.wrapper}>
            {linkElement}
            <h1 className={props.onAllContacts ? styles.contactIndex : styles.contact}>{props.contact}</h1>
        </div>
    )
}