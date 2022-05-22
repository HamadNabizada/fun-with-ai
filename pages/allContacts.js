import homeStyles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function allContacts(){
    return (
        <div className={homeStyles.wrapper}>
            <Header onAllContacts={true} contact='All Contacts' />
            
        </div>
    )
}