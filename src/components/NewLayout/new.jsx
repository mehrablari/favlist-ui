import { useEffect } from "react"
import NavBar from "../NavBar"
import { useLocation } from "react-router-dom"
import './new.css'
import SearchInputWithChips from "../SearchInput/searchInput"


const NewLayout = () => {

    const nre = {
        "id": "268",
        "text": "Who are your favorite actors who have players a superhero in a movie?",
        "graphicTitle": "My favorite actors who have played a superhero are:",
        "category": {
            "id": 28,
            "name": "ANIMATION"
        },
        "dateToPost": "2024-03-17",
        "sponsor": {
            "id": 297,
            "name": "Amazon ",
            "url": "https://www.amazon.com/",
            "logoS3Url": "https://storage.googleapis.com/favlist_store/20240321173707-Amazon_logo_PNG3.png",
            "adsS3Url": "https://youtu.be/9DLx3-Bynxc",
            "activeStatus": null
        },
        "daysToRemainOpen": 976,
        "minAnswerCount": 3,
        "maxAnswerCount": 5,
        "answersJson": [
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
            "Henry Cavill ",
            "Jennifer Lawrence ",
            "Jeremy Renner ",
            "Tom Holland ",
            "Hugh Jackman ",
            "Tobey Maguire ",
            "Brie Larson ",
            "Adam West ",
            "Andrew Garfield ",
            "Angelina Jolie ",
            "Aaron Taylor-Johnson ",
            "Benedict Cumberbatch ",
            "Chadwick Boseman ",
            "Christian Bale ",
            "Christopher Reeve ",
            "Charlize Theron ",
            "Margot Robbie ",
            "Mark Ruffalo ",
            "Patrick Stewart ",
            "Tobey Maguire ",
            "Benedict Wong ",
            "Don Cheadle ",
            "Edward Norton ",
            "Michael Keaton ",
            "Val Kilmer ",
            "Michelle Pfeiffer",
            "Tom Hiddleston ",
            "Michael Jai White",
            "Gemma Chan",
            "Richard Madden",
            "Kumail Nanjiani",
            "Lia McHugh",
            "Brian Tyree",
            "Zachary Levi ",
            "James McAvoy",
            "Quintessa Swindell ",
            "Salma Hayek",
            "Uma Thurman ",
            "Vin Diesel ",
            "Will Smith ",
            "Aldis Hodge ",
            "Alexandra Shipp ",
            "Alicia Silverstone ",
            "Jessica Alba",
            "John Slattery ",
            "Karen Gillan",
            "Holly Hunter ",
            "Anne Hathaway ",
            "Anthony Mackie ",
            "Asher Angel ",
            "Kathryn Newton ",
            "Katy O'Brian",
            "Letitia Wright ",
            "Billy Crudup ",
            "Bradley Cooper ",
            "Brandon Routh ",
            "Lewis Wilson ",
            "Lupita Nyong'o ",
            "Malin Akerman ",
            "Michael Chiklis ",
            "Michael Douglas ",
            "Michael Fassbender ",
            "Sebastian Stan ",
            "Sophie Turner ",
            "Terrence Howard ",
            "Tessa Thompson",
            "Tilda Swinton ",
            "Naomi Scott ",
            "Nicolas Cage ",
            "Noah Centineo ",
            "Olivia Munn ",
            "Elizabeth Olsen ",
            "Evangeline Lilly ",
            "Famke Jansse",
            "Florence Pugh ",
            "George Clooney ",
            "Halle Berry ",
            "Hayley Atwell ",
            "Cobie Smulders",
            "Craig T. Nelson ",
            "Danai Gurira ",
            "Dave Bautista ",
            "David Harbour ",
            "Hugo Weaving ",
            "Ian McKellen",
            "Ioan Gruffudd ",
            "Jackie Earle Haley ",
            "Zoe Saldana ",
            "Mark Hamill",
            "Jeffrey Dean Morgan ",
            "William Jackson Harper",
            "Winston Duke",
            "Paul Bettany ",
            "Don Lee",
            "Pierce Brosnan ",
            "Robert Lowery ",
            "Ron Perlman ",
            "Lauren Ridloff",
            "Barry Keoghan"
        ],
        "userSubmission": null
    }

    const {state} = useLocation()

    const Chip = ({ label, onRemove }) => (
        <div className="chip">
          {label}
          <button onClick={onRemove} className="remove-chip">
            ×
          </button>
        </div>
    )


      

    return (
        <>
            <NavBar />

            <div className="px-[10px] bg-primary h-[100vh]">
                <div className="pt-[80px]">
                    <h1 className="question-text">{state?.text}</h1>
                </div>
                {/* <div className="input-container">
                    <p>Select {state?.minAnswerCount} to {state?.maxAnswerCount} answers</p>
                    
                </div> */}

                <SearchInputWithChips min={state?.minAnswerCount} max={state?.maxAnswerCount} options={state?.answersJson}/>


                
            </div>

        </>
    )

}

export default NewLayout