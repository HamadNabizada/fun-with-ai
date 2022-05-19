import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainChat from './components/MainChat'
import {useState} from 'react'
import {nanoid} from 'nanoid'

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
      message:'Hello friend. Ask me a question.',
      id:nanoid()
    }
  ])

  async function getAnswerFromAI(){
    // setMessages(prevMessages =>{
    //   let currentMessage = {
    //     sender: 'me',
    //     message: myPrompt,
    //     id: nanoid()
    //   }
    //   let newMessage = [...prevMessages, currentMessage]
    //   return newMessage
    // })
    // setMyPrompt('')
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
    //  setMessages(prevMessages =>{
    //   let currentMessage = {
    //     sender: apiData.model,
    //     message: apiData.choices[0].text,
    //     id: apiData.id
    //   }
    //   let newMessages = [...prevMessages, currentMessage]
    //   return newMessages
    // })
  }

  function handleChange(e){
    setMyPrompt(e.target.value)
  }
  console.log(`my prompt is: ${myPrompt}`);
  console.log(messages);
  return (
    <main className={styles.wrapper}>
      <button onClick={getAnswerFromAI} >Request</button>
      {/* <Header />
      <MainChat messages={[...messages]} />
      <Footer prompt={myPrompt} handleChange={handleChange} handleClick={getAnswerFromAI}/> */}
    </main>
  )
}
