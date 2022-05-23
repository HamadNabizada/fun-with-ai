import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainChat from '../components/MainChat'
import {useState} from 'react'
import {nanoid} from 'nanoid'
import { useEffect } from 'react'


export async function getServerSideProps(){
 const pass = process.env.OPENAI_SECRET

 return{
   props:{pass: pass}
 }
}


export default function Home(props) {
  let [myPrompt, setMyPrompt] = useState("")
  let [messages, setMessages] = useState([
    {
      sender:'text-curie:001',
      message:'Hello friend. Ask me a question. (or click All Contacts)',
      id:nanoid()
    }
  ])

  useEffect(()=>{
    if(localStorage.getItem('HomeChat')){
      setMessages(JSON.parse(localStorage.getItem('HomeChat')))
    }
  }, [])

  async function getAnswerFromAI(){
    setMessages(prevMessages =>{
      let currentMessage = {
        sender: 'me',
        message: myPrompt,
        id: nanoid()
      }
      let newMessage = [...prevMessages, currentMessage]
      localStorage.setItem('HomeChat',JSON.stringify(newMessage))
      return newMessage
    })
    setMyPrompt('')
    const data = {
      prompt: myPrompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
     };
      
     let apiResponse = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify(data),
     })
     let apiData = await apiResponse.json()
     setMessages(prevMessages =>{
      let currentMessage = {
        sender: apiData.model,
        message: apiData.choices[0].text,
        id: apiData.id
      }
      let newMessages = [...prevMessages, currentMessage]
      localStorage.setItem('HomeChat',JSON.stringify(newMessages))
      return newMessages
    })
  }

  function handleChange(e){
    setMyPrompt(e.target.value)
  }

  return (
    <main className={styles.wrapper}>
      <Header onAllContacts={false} contact='Home' />
      <MainChat messages={[...messages]} />
      <Footer prompt={myPrompt} handleChange={handleChange} handleClick={getAnswerFromAI}/>
    </main>
  )
}
