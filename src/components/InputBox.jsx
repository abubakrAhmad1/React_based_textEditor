import React,{useState} from "react";
//it will make an array of 9 states with null initializer
//const[displayBox , setDisplayBox] = useState(Array(9).fill(null));
//    <button className="square" onClick={() => handleClick(index)}> </button>


function InputBox() {

    const[text,setText] = useState(""); //initialize the text state variable with space ""

    const onClickToUpper = ()=> {
        setText(text.toUpperCase());
    };

    const onClickToLower = ()=> {
        setText(text.toLowerCase());
    };

    const onClickRemoveSpace = () => {
        setText(text.trim());
    };

    const onClickRemovetext = () => {
        setText("");
    };

    const onChangeFunc = (event) => { //change event will always return an event object and value will be inside it
      console.log(event.target.value); 
      setText(event.target.value);
    };



  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Write text Here
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={5}
          defaultValue={""}
          value = {text}
          onChange ={onChangeFunc} //when we type anything in input box the state of input box will change so that's why we should have to cater what to do when we it will change
        />
      </div>

      <button className ="btn btn-primary mx-2" onClick ={() => onClickToUpper()}>CLick to Convert UpperCase</button>
      <button className ="btn btn-primary mx-2" onClick ={() => onClickToLower()}>CLick to Convert LowerUpperCase</button>
      <button className ="btn btn-primary mx-2" onClick ={onClickRemoveSpace}>CLick to Remove End Spaces</button>
      <button className ="btn btn-primary mx-2" onClick ={onClickRemovetext}>Remove Text</button>

      <h2 className="my-3">Text Summary</h2>
      <p>Total Characters: {text.length}</p>
      <p>Total Words: {text.split(" ").length - 1}</p>
      <p>Total Time Require to Read this Text is = {0.068*(text.length)}</p>
     
      <h2 className="my-3">Preview</h2>
      <p>{text}</p>
    </>
  );
}

export default InputBox;
