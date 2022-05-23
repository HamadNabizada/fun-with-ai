import homeStyles from '../styles/Home.module.css'
import Header from '../components/Header'
import MainChat from '../components/MainChat'
import Footer from '../components/Footer'
import {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'

export async function getServerSideProps(){
  const pass = process.env.OPENAI_SECRET
 
  return{
    props:{pass: pass}
  }
 }

export default function Eli5(props){
    let [myPrompt, setMyPrompt] = useState("")
    let [messages, setMessages] = useState([
      {
        sender:'eli5',
        message:'Send me message and I will simplify it so that a 5 year old can understand.',
        id:nanoid()
      }
    ])
    useEffect(()=>{
        if(localStorage.getItem('eli5')){
          setMessages(JSON.parse(localStorage.getItem('eli5')))
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
        localStorage.setItem('eli5',JSON.stringify(newMessage))
        return newMessage
    })
    setMyPrompt('')
    const data = {
        prompt: 'Summarize this for a second-grade student: ' + myPrompt,
        temperature: 0.7,
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
        setMessages(prevMessages =>{
        let currentMessage = {
        sender: apiData.model,
        message: apiData.choices[0].text,
        id: apiData.id
        }
        let newMessages = [...prevMessages, currentMessage]
        localStorage.setItem('eli5',JSON.stringify(newMessages))
        return newMessages
    })
    }
  function handleChange(e){
    setMyPrompt(e.target.value)
  }
    return (
        <div className={homeStyles.wrapper}>
            <Header contact='ELI5' />
            <MainChat messages={[...messages]}/>
            <Footer prompt={myPrompt} handleChange={handleChange} handleClick={getAnswerFromAI}/>
        </div>
    )
}