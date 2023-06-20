 import {useState} from "react";
import TinderCard from "react-tinder-card";
import logo from "../../assets/images/path14.png"

function TinderCards(){
  const [peoples,setPeople]=useState([
    {
      name: "John",
      id: 1,
      date: "2023-06-19",
      url: logo,
      title: "Entry 1",
    },
    {
      name: "Alice",
      id: 2,
      date: "2023-06-18",
      url: "https://www.istockphoto.com/photo/african-megacity-traffic-lagos-nigeria-gm1401228236-454546698",
      title: "Entry 2",
    },
    {
      name: "Bob",
      id: 3,
      date: "2023-06-17",
      url: "https://www.istockphoto.com/photo/used-taxi-vehicles-for-sale-at-the-market-in-oshodi-gm670815128-122722533",
      title: "Entry 3",
    },
    {
      name: "Emily",
      id: 4,
      date: "2023-06-16",
      url: "https://www.istockphoto.com/photo/7th-avenue-nyc-gm474451128-65266161",
      title: "Entry 4",
    },
    {
      name: "Michael",
      id: 5,
      date: "2023-06-15",
      url: "https://www.istockphoto.com/photo/some-new-cars-in-the-parking-lot-gm1496653397-519255500",
      title: "Entry 5",
    },
    {
      name: "Sophia",
      id: 6,
      date: "2023-06-14",
      url: "https://www.istockphoto.com/photo/typical-old-yellow-bus-in-malta-along-the-street-gm92871662-10521862",
      title: "Entry 6",
    },
  ]);
 const swiped=(direction,nameToDelete)=>{
    console.log(`i'm in swiped`,nameToDelete);
    // setLastDirection(direction);
  }

  const disabled = (index) => {
    if (index === peoples.length - 1) {
      return true;
    }
    return false;
  };

  const onCardLeftScreen = (name) => {
    console.log(name + " left the screen");
    setPeople((prevPeople) =>
      prevPeople.filter((person) => person.name !== name)
    );
  };

  return(
    <div className="flex justify-center mt-[10vh] overflow-hidden bg-neutral">
      {peoples.map((person, index) =>
        <TinderCard
          key={index}
          className="absolute rounded-[10px] shadow-xl"
          preventSwipe={['top', 'down', disabled(index) ? 'left' : null]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => onCardLeftScreen(person.name)}
          
        > 
        <div className="relative w-[400px] p-[20px] max-w-[85vw] h-[50vh] rounded-[10px] bg-neutral" 
        style={{
          backgroundImage: `url(${person.url})`,
        }}>
          <h3 className="text-gray-dark m-[10px] ">{person.name}</h3>
        </div>
        <div className="flex flex-row bg-neutral justify-between">
          <h2 className="text-gray-dark m-[10px]">{person.date}</h2>
          <h2 className="text-gray-dark m-[10px]">{person.title}</h2>
        </div>
        
         </TinderCard>
      )}
    </div>
  )
}
export default TinderCards;