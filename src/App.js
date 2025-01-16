import { useState } from "react";
import quizData from "./data/quizData";
import CategorySelection from "./components/CategorySelection";
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";
const App = () => {
  const [category, setCategory] = useState(null);  
  const [finished,setfinished] = useState(false);
  const [score,setSore] = useState(0);
  const handleCategorySelect = (select) =>{
    setCategory(select);
  }
  const handleFinish = (score) =>{
    setfinished(true);
    setSore(score);
  }
  const handleRestart =()=>{
    setCategory(null);
    setfinished(false);
  }
  return (
   
    <div>
       { !category && !finished &&
      <CategorySelection categories={quizData.categories}
      onCategorySelect={handleCategorySelect}
      />
    }
      {
        category &&  !finished && 
     <QuizPage 
        category={category}
        quizdata={quizData.quizzes}
        onFinished={handleFinish}
        />        
      }   
      {
        finished &&
     <Results score={score} onRestart={handleRestart}/>
      } 
    </div>
  );
};

export default App;