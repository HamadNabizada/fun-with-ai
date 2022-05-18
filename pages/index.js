import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainChat from './components/MainChat'
import {useState} from 'react'

export async function getServerSideProps(){
 const pass = process.env.OPENAI_SECRET

 return{
   props:{pass: pass}
 }
}



export default function Home(props) {
  let [myPrompt, setMyPrompt] = useState("Write a poem about a dog wearing skis")
  let [messages, setMessages] = useState({
    sender:'',
    message:''
  })
  
  async function getAnswerFromAI(){
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
        Authorization: `Bearer ${props.pass}`,
      },
      body: JSON.stringify(data),
     })
     let apiData = await apiResponse.json()
     console.log(apiData);
  }
  return (
    <main className={styles.wrapper}>
      <Header />
      <MainChat />
      <Footer handleClick={getAnswerFromAI}/>
    </main>
  )
}
