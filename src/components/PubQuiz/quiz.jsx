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
        "Elgin Baylor",
        "Patrick Ewing",
        "Bill Bradley",
        "Vince Carter",
        "Jason Kidd",
        "Reggie Miller",
        "Alex English",
        "Adrian Dantley",
        "Bernard King",
        "Dominique Wilkins",
        "Anthony Davis",
        "Chris Bosh",
        "DeMar DeRozan",
        "Bob Cousy",
        "John Havlicek",
        "Elvin Hayes",
        "Chris Paul",
        "Dolph Schayes",
        "Bob Pettit",
        "Ray Allen",
        "Carmelo Anthony",
        "Paul Arizin",
        "Clyde Drexler",
        "Hal Greer",
        "James Harden",
        "Paul Pierce",
        "George Gervin",
        "Robert Parish",
        "Gary Payton",
        "Russell Westbrook",
        "Lenny Wilkens",
        "Rick Barry",
        "Dave Cowens",
        "Dave DeBusschere",
        "Larry Foust",
        "Paul George",
        "Dwight Howard",
        "Kyrie Irving",
        "Bob Lanier",
        "Dikembe Mutombo",
        "Bill Sharman",
        "Yao Ming",
        "LaMarcus Aldridge",
        "Dave Bing",
        "Walt Frazier",
        "Harry Gallatin",
        "Grant Hill",
        "Joe Johnson",
        "Luka Doncic",
        "Nikola Jokic",
        "Bam Adebayo",
        "Bradley Beal",
        "Brandon Roy",
        "Chris Webber",
        "Chauncey Billups",
        "Damian Lillard",
        "Devin Booker",
        "Donovan Mitchell",
        "Domantas Sabonis",
        "Ja Morant",
        "Joel Embiid",
        "Jayson Tatum",
        "Jimmy Butler",
        "Jrue Holiday",
        "Julius Randle",
        "Karl-Anthony Towns",
        "Jaylen Brown",
        "Jayson Tatum__1",
        "Damian Lillard__1",
        "Jerry Lucas",
        "Adrian Dantley__1",
        "Al Horford",
        "Alonzo Mourning",
        "Alvin Robertson",
        "Amar'e Stoudemire",
        "Andy Phillip",
        "Antoine Walker",
        "Arnie Risen",
        "Artis Gilmore",
        "Bailey Howell",
        "Ben Simmons",
        "Ben Wallace",
        "Bernard King__1",
        "Bill Bridges",
        "Bill Laimbeer",
        "Bill Sharman__1",
        "Bill Walton",
        "Billy Cunningham",
        "Blake Griffin",
        "Bob Dandridge",
        "Bob Davies",
        "Bob Kauffman",
        "Bob Lanier__1",
        "Bob Love",
        "Bob McAdoo",
        "Bobby Jones",
        "Bobby Wanzer",
        "Brad Daugherty",
        "Bradley Beal__1",
        "Brandon Roy__1",
        "Buck Williams",
        "Carl Braun",
        "Charlie Scott",
        "Chauncey Billups__1",
        "Chet Walker",
        "Chris Mullin",
        "Cliff Hagan",
        "Clyde Lovellette",
        "Connie Hawkins",
        "Dan Majerle",
        "Dan Roundfield",
        "Dave Bing__1",
        "Dave Cowens__1",
        "David Thompson",
        "DeAndre Jordan",
        "DeMar DeRozan__1",
        "DeMarcus Cousins",
        "Dennis Johnson",
        "Deron Williams",
        "Derrick Rose",
        "Detlef Schrempf",
        "Devin Booker__1",
        "Dick Garmaker",
        "Dick McGuire",
        "Dick Van Arsdale",
        "Dikembe Mutombo__1",
        "Domantas Sabonis__1",
        "Don Ohl",
        "Donovan Mitchell__1",
        "Doug Collins",
        "Draymond Green",
        "Dwight Howard__1",
        "Earl Monroe",
        "Earl Monroe__1",
        "Ed Macauley",
        "Eddie Jones",
        "Eddie Jones__1",
        "Elton Brand",
        "Gail Goodrich",
        "Gene Shue",
        "George McGinnis",
        "George Mikan",
        "George Mikan__1",
        "George Yardley",
        "Gilbert Arenas",
        "Glen Rice",
        "Grant Hill__1",
        "Gus Johnson",
        "Guy Rodgers",
        "Horace Grant",
        "Jack Sikma",
        "Jack Sikma__1",
        "Jack Twyman",
        "Jamaal Wilkes",
        "James Worthy",
        "Jayson Tatum__2",
        "Jeff Mullins",
        "Jermaine O'Neal",
        "Jerry Lucas__1",
        "Jim Pollard",
        "Jimmy Butler__1",
        "Jo Jo White*",
        "Joe Dumars",
        "Joe Johnson__1",
        "Joel Embiid^",
        "John Wall^",
        "Johnny Green",
        "Johnny Kerr",
        "Karl-Anthony Towns__1",
        "Kemba Walker",
        "Kevin Johnson",
        "Kevin Love",
        "Kevin McHale",
        "Kevin McHale__1",
        "Khris Middleton",
        "Klay Thompson",
        "Kyle Lowry",
        "Kyrie Irving__1",
        "LaMarcus Aldridge__1",
        "Larry Costello",
        "Larry Nance",
        "Latrell Sprewell",
        "Lenny Wilkens__1",
        "Lou Hudson",
        "Marc Gasol",
        "Mark Aguirre",
        "Mark Price",
        "Marques Johnson",
        "Maurice Cheeks",
        "Maurice Lucas",
        "Maurice Stokes",
        "Mel Hutchins",
        "Micheal Ray Richardson",
        "Mitch Richmond",
        "Nate Archibald",
        "Nate Thurmond",
        "Neil Johnston",
        "Norm Van Lier",
        "Otis Birdsong",
        "Pau Gasol",
        "Paul George__1",
        "Paul Millsap",
        "Paul Seymour",
        "Paul Westphal",
        "Peja Stojaković",
        "Penny Hardaway",
        "Pete Maravich",
        "Phil Chenier",
        "Rajon Rondo†",
        "Ralph Sampson",
        "Rasheed Wallace",
        "Richard Hamilton",
        "Richie Guerin",
        "Rick Barry__1",
        "Rolando Blackman",
        "Rudy Gobert",
        "Rudy LaRusso",
        "Rudy Tomjanovich",
        "Sam Jones",
        "Shawn Kemp",
        "Shawn Marion",
        "Sidney Moncrief",
        "Sidney Wicks",
        "Slater Martin",
        "Spencer Haywood",
        "Steve Francis",
        "Terry Dischinger",
        "Tim Hardaway",
        "Tom Chambers",
        "Tom Gola",
        "Tom Heinsohn",
        "Tom Van Arsdale",
        "Tony Parker",
        "Tracy McGrady",
        "Vern Mikkelsen",
        "Vin Baker",
        "Walt Bellamy",
        "Walt Frazier__1",
        "Walter Davis",
        "Wayne Embry",
        "Wes Unseld",
        "Willie Naulls",
        "Willis Reed"
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