import { useState } from "react";
import "./QuizPage.css";

const QuizPage = ({category,quizdata,onFinished}) => {
  const [currentIdx, setCurretnIdx] = useState(0);
  const [score,setScore] = useState(0);
  const quizArr = quizdata.filter((data)=>{
    return data.category === category;               
  });
   const currentQuiz = quizArr[currentIdx];
   const handleAnswer = (answer)=>{
    // if(answer === currentQuiz.correct){
    //   setScore(score+10);
    // }
    const result = (answer === currentQuiz.correct) ? score+20 : score;
    if(currentIdx+1 < quizArr.length){
      setScore(result)
      setCurretnIdx(currentIdx+1);
    } else{
      //종료상태 
      onFinished(result);
    }    
   }
  return (
    <div className="quiz-page">
      <img src="./images/question.jpg"></img>    
      <h2>{category}퀴즈</h2>
      {/* 1번째 p태그로 문제 제출, div태그 > button(div밑에 버튼으로) */}
      <p className="count"><strong>문제 {currentIdx+1} / {quizArr.length}</strong></p>
      <p className="score">점수 : {score}점</p>
      <p className="question">{currentQuiz.question}</p>
      <div className="choices">
        {
          currentQuiz.choices.map((txt,idx)=>{
            return <button 
                          key={idx}
                          onClick={()=>{handleAnswer(txt)}}
                          >{txt}</button>
          })
        }        
    </div>    
    </div>
  );
};

export default QuizPage;