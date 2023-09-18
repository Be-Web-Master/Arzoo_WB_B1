import React, { useRef, useState } from "react";

export const Card = (props) => {
  const [isButton, setisButton] = useState(false);
  const [isComment, setIsComment] = useState("");
  const [count, setCount] = useState(0);
  const [saveComment, setSaveComment] = useState([]);
  //   const text = useRef("");
  const { food } = props;
  return (
    <div className="card" key={food.food.foodId}>
      <img src={food.food.image} className="img" alt="" />
      <h3 className="label">{food.food.label}</h3>
      <div>
        <input
          type="text"
          placeholder="comment"
          onChange={(e) => {
            setisButton(true);
            setIsComment(e.target.value);
            setCount(e.target.value.length);
            // if(isComment.length<10){
            //     setSaveComment(...saveComment,isComment)
            // }
            // else{
            //     <span style={{backgroundColor: "red"}}>
            //         {isComment}
            //     </span>
            // }
          }}
        />
        {isButton && (
          <button
            onClick={() => {
              setSaveComment([...saveComment, isComment]);
              setIsComment("");
            }}
          >
            Save
          </button>
        )}
        {count}
      </div>
      <div
        value={isComment}
        style={{ backgroundColor: isComment.length > 10 ? "red" : "none" }}
      >
        {isComment}
      </div>
      <h4>Comments:</h4>
      {saveComment}
    </div>
  );
};
