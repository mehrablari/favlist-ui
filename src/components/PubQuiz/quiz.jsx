import { useEffect, useState } from "react"
import NavBar from "../NavBar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

const Quiz = () => {

    const options = [
        "Michael Jordan",
        "LeBron James",
        "Kareem Abdul-Jabbar",
        "Magic Johnson",
        "Kobe Bryant",
        "Shaquille O'Neal",
        "Larry Bird",
        "Wilt Chamberlain",
        "Tim Duncan",
        "Stephen Curry",
        "Kevin Durant",
        "Bill Russell",
        "Oscar Robertson",
        "Hakeem Olajuwon",
        "Kevin Garnett",
        "Julius Erving",
        "Karl Malone",
        "Jerry West",
        "Dirk Nowitzki",
        "Charles Barkley",
        "Allen Iverson",
        "David Robinson",
        "Dwyane Wade",
        "Isiah Thomas",
        "Moses Malone",
        "Scottie Pippen",
        "Steve Nash",
        "John Stockton",
        "Kawhi Leonard",
        "Giannis Antetokounmpo",
        "Anthony Davis",
        "Chris Bosh",
        "DeMar DeRozan",
        "Bob Cousy",
        "John Havlicek",
        "Elvin Hayes",
        "Chris Paul",
        "Dolph Schayes",
        "Ray Allen",
        "Clyde Drexler",
    ]

    const [showOptions, setShowOptions] = useState([])
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(4)
    const [selectedOptions, setSelectedOption] = useState([])
    let selected = []


    useEffect( () => {
        setShowOptions(options.slice(0,4))
    },[])

    const nextPage = () => {
        const newStart = start+4
        const newEnd = end+4
        setStart(newStart)
        setEnd(newEnd)

        console.log(newStart , newEnd , 'yoyo')
        setShowOptions(options.slice(newStart, newEnd))

        // console.log(start , end , showOptions)
    }

    const previosPage = () => {
        if(start === 0 ) return
        const newStart = start-4
        const newEnd = end-4
        setStart(newStart)
        setEnd(newEnd)

        console.log(newStart , newEnd , 'yoyo')
        setShowOptions(options.slice(newStart, newEnd))
    }

    const clickOnItem = async(item) => {
        for(const sl of selectedOptions){
            if(sl === item) return
            selected.push(sl)
        }
        selected.push(item)
        setSelectedOption(selected)
        nextPage()
    }

    const removeAnswer = (option) => {
        console.log(option)
        for(const sl of selectedOptions){
            selected.push(sl)
        }
        const index = selected.indexOf(option)
        if(index > -1){
            selected.splice(index, 1)
        }

        
        setSelectedOption(selected)
    }

    return (
        <>
            <NavBar />
            <div className="pt-[80px] flex justify-center  w-full">
                <p>The Best NBA Player</p>
            </div>
            <div className="flex flex-wrap w-full justify-center gap-[8px] ">
                {
                    showOptions.map((item) => {
                        return<div className="  w-2/5   pl-[33px]  border border-primary-light border-solid  bg-primary-bg h-[80px] rounded-sm flex leading-[44px] " onClick={() => clickOnItem(item)}>{item}</div>
                    })
                }
            </div>
            <div className="mt-[5px]">
                <button className=" absolute left-[38px]" onClick={previosPage}><ArrowBackIcon/>  Back</button>
                <button className=" absolute right-[38px]" onClick={nextPage}>Next <ArrowForwardIcon /></button>
            </div>

            <div className="mt-[50px] m-auto w-full">
                {
                    selectedOptions.map((option) => {
                        return <div className=" border border-primary border-solid rounded-sm w-[348px] m-auto px-[5px] mt-[5px] h-[25px]"><CloseIcon fontSize="9px" onClick={() =>removeAnswer(option)}/> {option}</div>
                    })
                }
            </div>
            
        </>
    )
}

export default Quiz