import "./Results.css";
const Results = ({score,onRestart}) => {
  return (
    <div className="results">
      <img src="./images/crown.jpg"></img>   
      <p className="quiz_end">퀴즈종료!</p>
      <div className="quiz_end_line"></div>
      <p>최종점수 </p>
      <p> {score}점</p>
      <div className="score_line"></div>
      <div className="scoreline"></div>
      <button onClick={onRestart}>다시 시작하기</button>
    </div>
  );
};

export default Results;