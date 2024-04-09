import { useState } from "react"
import NavBar from "../NavBar"
import './home.css'
import { useNavigate } from "react-router-dom"



const Home = () => {

    // const [questions, setQuestion] = useState([])
    const [selectedCard , setSelectedCard ] = useState(null)
    const navigate = useNavigate()

    const questions = [
        {
            text: 'What are your favorite places to travel?',
            color: 'gray',
            short: 'First question',
            tags: ['tag1', 'tag2', 'tag3'],
            id: 1,
            remainDate: 4,
            minAnswerCount: 3,
            maxAnswerCount: 5,
            answersJson : [
                "Ryan Reynolds ",
                "Samuel L. Jackson ",
                "Scarlett Johansson ",
                "Ben Affleck ",
                "Chris Evans ",
                "Chris Hemsworth ",
                "Chris Pratt ",
                "Jason Momoa ",
                "Robert Downey Jr. ",
                "Michael B. Jordan ",
                "Paul Rudd ",
                "Dwayne \"The Rock\" Johnson ",
                "Gal Gadot ",
                "Henry Cavill "
            ]

        },
        {
            text: 'this is second test question',
            color: 'green',
            short: 'second Question',
            tags: ['tag1', 'tag2', 'tag3'],
            id: 1,
            remainDate: 4,
            minAnswerCount: 3,
            maxAnswerCount: 5,
            answersJson : [
                "Ryan Reynolds ",
                "Samuel L. Jackson ",
                "Scarlett Johansson ",
                "Ben Affleck ",
                "Chris Evans ",
                "Chris Hemsworth ",
                "Chris Pratt ",
                "Jason Momoa ",
                "Robert Downey Jr. ",
                "Michael B. Jordan ",
                "Paul Rudd ",
                "Dwayne \"The Rock\" Johnson ",
                "Gal Gadot ",
                "Henry Cavill "
            ]
        },
    ]

    const answerQuestion = (question) => {
        navigate('/answer', {state: question })
    }

    return(
        <>
        <NavBar />

        <div className="px-[10px] bg-primary h-[100vh]">
            <div className="pt-[60px]">
                <h1 className="header">Welcome</h1>
                <p className="intro-text">We celebrate the human fascination with <br/> organizing our preferences into lists, recognizing <br /> the power they have to reflect our unique tastes and interests.</p>
            </div>

            <div className="card-list mt-[30px]">
                {questions.map((question, index) => (
                    <>
                    
                        {
                            index === selectedCard &&
                            <div className="expanded-card" style={{'background': `${question.color}`}}>
                                <div className="ex-card">
                                    <div className="text">{question.text}</div>
                                    <button className="answer" onClick={() => answerQuestion(question)}>ANSWER</button>
                                </div>
                            </div>
                        }
                        {
                            index !== selectedCard &&
                            <div className="card" style={{'background': `${question.color}`}}>
                                <div className="card-content">
                                    <button className="add-button" onClick={() => setSelectedCard(index)}>+</button>
                                    <div className="card-title">{question.short}</div>
                                    <div className="card-expire-num">{question.remainDate} days</div>
                                    <div className="card-expire">to expire</div>
                                </div>
                            </div>
                        }
                    </>
                ))}
            </div>
        </div>
        </>
    )
}
export default Home