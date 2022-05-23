import homeStyles from '../styles/Home.module.css'
import Header from '../components/Header'
import Contact from '../components/Contact'

export default function allContacts(){
    return (
        <div className={homeStyles.wrapper}>
            <Header onAllContacts={true} contact='All Contacts' />
            <Contact route='/' contactName='Home' />
            <Contact route='/' contactName='Home' />
            <Contact route='/' contactName='Home' />
            <Contact route='/' contactName='Home' />
        </div>
    )
}