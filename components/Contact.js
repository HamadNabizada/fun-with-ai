import styles from '../styles/Contact.module.css'
import Link from 'next/link'

export default function Contact(props){
    return(
        <Link href={props.route}>
            <a className={styles.wrapper}>{props.contactName}</a>
        </Link>
    )
}