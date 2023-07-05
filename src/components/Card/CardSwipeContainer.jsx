
import CardSwipe from "./CardSwipe";

const CardSwipeContainer = (questionData) => {
  console.log("this is question",questionData)



  return (
    <div className="bg-primary">
     <CardSwipe data={questionData} />
    
    </div>
  );
};

export default CardSwipeContainer;



// {selectedQuestion && (
//     <div className="bg-primary">
//       <h3>{selectedQuestion.text}</h3>
//       <p>Category: {selectedQuestion.category.name}</p>
//       <p>Date to Post: {selectedQuestion.dateToPost}</p>
//       <p>Sponsor: {selectedQuestion.sponsor.name}</p>
//       {/* Include other question properties as needed */}
//       <p>Days to Remain Open: {selectedQuestion.daysToRemainOpen}</p>
//       <p>Min Answer Count: {selectedQuestion.minAnswerCount}</p>
//       <p>Max Answer Count: {selectedQuestion.maxAnswerCount}</p>
//       <ul>
//         {selectedQuestion.answersJson.map((answer, index) => (
//           <li key={index}>{answer}</li>
//         ))}
//       </ul>
//     </div>
//   )}

//   const handleCardSwipe = (question) => {
//     console.log("Selected question:", question);
//     // Perform any desired actions with the selected question
//   };

// import CardSwipe from "./CardSwipe";


// const CardSwipeContainer = ({questionData}) => {
//   return (
//     <div className="bg-primary">
//       <CardSwipe questionData={questionData}/>
//     </div>
//   )
// }

// export default CardSwipeContainer