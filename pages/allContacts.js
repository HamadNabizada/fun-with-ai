import homeStyles from '../styles/Home.module.css'
import Header from '../components/Header'
import Contact from '../components/Contact'

export default function AllContacts(){
    return (
        <div className={homeStyles.wrapper}>
            <Header onAllContacts={true} contact='All Contacts' />
            <Contact route='/' contactName='Home' />
            <Contact route='/eli5' contactName='ELI5' />
        </div>
    )
}