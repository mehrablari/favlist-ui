import { useState } from "react"
import NavBar from "../NavBar"
import './home.css'
import { useNavigate } from "react-router-dom"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SampleImage from '../../assets/images/sample-img.jpeg';
import { useContext } from "react";
import DataContext from "../../context/DataContexts";




const Home = () => {

    // const [questions, setQuestion] = useState([])
    const [selectedCard , setSelectedCard ] = useState(null)
    const [selectedClosed, setSelectedClosed] = useState(null)
    const navigate = useNavigate()
    const {
        questions,
        error,
        editQuestion,
        editAnswer,
        answers,
        setAnswers,
        // setIsDrag,
        // isDrag,
      } = useContext(DataContext);

    // const questions = [
    //     {
    //         text: 'What are your favorite places to travel?',
    //         color: 'gray',
    //         short: 'First question',
    //         tags: ['tag1', 'tag2', 'tag3'],
    //         id: 1,
    //         remainDate: 4,
    //         minAnswerCount: 3,
    //         maxAnswerCount: 5,
    //         answersJson : [
    //             "Ryan Reynolds ",
    //             "Samuel L. Jackson ",
    //             "Scarlett Johansson ",
    //             "Ben Affleck ",
    //             "Chris Evans ",
    //             "Chris Hemsworth ",
    //             "Chris Pratt ",
    //             "Jason Momoa ",
    //             "Robert Downey Jr. ",
    //             "Michael B. Jordan ",
    //             "Paul Rudd ",
    //             "Dwayne \"The Rock\" Johnson ",
    //             "Gal Gadot ",
    //             "Henry Cavill "
    //         ]

    //     },
    //     {
    //         text: 'this is second test question',
    //         color: 'green',
    //         short: 'second Question',
    //         tags: ['tag1', 'tag2', 'tag3'],
    //         id: 1,
    //         remainDate: 4,
    //         minAnswerCount: 3,
    //         maxAnswerCount: 5,
    //         answersJson : [
    //             "Ryan Reynolds ",
    //             "Samuel L. Jackson ",
    //             "Scarlett Johansson ",
    //             "Ben Affleck ",
    //             "Chris Evans ",
    //             "Chris Hemsworth ",
    //             "Chris Pratt ",
    //             "Jason Momoa ",
    //             "Robert Downey Jr. ",
    //             "Michael B. Jordan ",
    //             "Paul Rudd ",
    //             "Dwayne \"The Rock\" Johnson ",
    //             "Gal Gadot ",
    //             "Henry Cavill "
    //         ]
    //     },
    // ]

    console.log(questions, 'dfdfdfdfdfdfd')
    const closedQuestions = [
        {
            text: 'What are your favorite places to travel?',
            color: 'gray',
            image: '',
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
            ],
            topVote : [
                {
                    text: 'Belgium',
                    count: '16'
                },
                {
                    text: 'Crotia',
                    count: '11'
                },
                {
                    text: 'Czechia',
                    count: '10'
                },
                {
                    text: 'Ukraine',
                    count: '8'
                },
                {
                    text: 'United Kingdom',
                    count: '6'
                }
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
            ],
            topVote : [
                {
                    text: 'Belgium',
                    count: '16'
                },
                {
                    text: 'Crotia',
                    count: '11'
                },
                {
                    text: 'Czechia',
                    count: '10'
                },
                {
                    text: 'Ukraine',
                    count: '8'
                },
                {
                    text: 'United Kingdom',
                    count: '6'
                }
            ]
        },
    ]

    const answerQuestion = (question) => {
        navigate('/answer', {state: {question : question}})
    }

    const selectOrRemoveSelected = (index) => {
        if(index === selectedClosed){
            setSelectedClosed(null)
        }else{
            setSelectedClosed(index)
        }

    }

    return(
        <>
        <NavBar />

        <div className="px-[10px] bg-primary h-[100vh]">
            <div className="pt-[60px]">
                <h1 className="header">Welcome</h1>
                <p className="intro-text">Review questions, list your favorite answers, and <br/> share your choices. Every list is a story that  <br /> should be shared and counted.</p>
            </div>

            <div className="card-list mt-[30px]">
                {questions.map((question, index) => {
                    const bgStyle = {
                        backgroundImage: question.imagePath ? `url(${question.imagePath}` : `url(${SampleImage}`
                    }

                    return(

                    <>
                    
                        {
                            index === selectedCard &&
                            <div className="expanded-card" style={bgStyle}>
                                <div className="ex-card">
                                    <div className="text">{question?.text}</div>
                                    <button className="answer" onClick={() => answerQuestion(question)}>ANSWER</button>
                                </div>
                            </div>
                        }
                        {
                            index !== selectedCard &&
                            <div className="card" style={bgStyle}>
                                <div className="card-content">
                                    <button className="add-button" onClick={() => setSelectedCard(index)}>+</button>
                                    <div className="card-title">{question.graphicTitle}</div>
                                    <div className="card-expire-num">{question.daysToRemainOpen} days</div>
                                    <div className="card-expire">to expire</div>
                                </div>
                            </div>
                        }
                    </>
                    )
                })}
            </div>

            <div className="closedQuestions bg-primary">
                <p>Closed Questions</p>
                {
                    closedQuestions.map((question, index) => (
                        <>
                            {
                                selectedClosed === index &&
                                <div className="closed-expanded bg-neutral h-[362px] ">
                                    <div className="closed-content">
                                        <div className="closed-info flex">
                                            <button className="close-button" onClick={() => selectOrRemoveSelected(index)}>-</button>
                                            <div className="exp-text">
                                                <p className="p1">{question.short}</p>
                                                <p className="p2">413 people voted</p>
                                            </div>
                                            <div className="close-image w-[42px] h-[42px] rounded-[8px] absolute right-[28px]" >
                                                <img src={SampleImage} className="rounded-[8px]"></img>
                                            </div>
                                        </div>
                                        <div className="answers-report mt-[16px]">
                                            {
                                                question.topVote.map( (answer) => (
                                                    <div className="vote-row">
                                                        <span className="vote-text">{answer.text}</span>
                                                        <span className="vote-count">{answer.count} </span>
                                                        <span><PermIdentityIcon fontSize="14px" color="#464E56"/></span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="closed-date">
                                            <span className="closed-on">Closed on: </span>
                                            <span className="date">9 March 2024</span>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                selectedClosed !==index &&
                                <div className="closed-expanded  bg-neutral">
                                    <div className="closed-info flex mb-[8px]">
                                            <button className="close-button" onClick={() => selectOrRemoveSelected(index)}>+</button>
                                            <div className="exp-text">
                                                <p className="p1">{question.short}</p>
                                                <p className="p2">413 people voted</p>
                                            </div>
                                            <div className="close-image w-[42px] h-[42px] rounded-[8px] absolute right-[28px]" style={{'background': `${question.color}`}}>
                                                <img src={SampleImage} className=" w-full h-auto rounded-[8px]"></img>
                                            </div>
                                    </div>
                                    <div className="closed-date ">
                                            <span className="closed-on">Closed on: </span>
                                            <span className="date">9 March 2024</span>
                                        </div>
                                </div>
                            }
                        </>
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default Home