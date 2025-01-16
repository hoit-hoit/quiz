import "./CategorySelection.css";
const CategorySelection = ({categories,onCategorySelect}) => {
  // console.log(categories);
  return (
    <div className="category-selection">
      <h1><p>신나는</p>
      <p>금융퀴즈</p> </h1>     
      <img src="./images/check.jpg"></img>
      <h2>
        <p>카테고리를</p> 
        <p>선택해주세요</p> 
        </h2>
        <div className="buttons">
      {/* 1.카테고리를 button으로 작성       */}
      {categories.map((txt,idx)=>{
        return(      
          <button 
                     key={idx} onClick={()=>{onCategorySelect(txt)}}>{txt}
                     </button>
                     )                     
      })
      }
      </div>
    </div>
  );
};

export default CategorySelection;