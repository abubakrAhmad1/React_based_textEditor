import React from 'react'
//props is an object that has an array of the same name through which we have passed the arguments and we can 
//only access the each element of array through map() only and also in arrow() we have to do following
// (argument) => (code implementation)

function Argu(props) {
    // console.log(props.argu[0].studentName);
    return(
        // <div>
        // props.argu.map((temp ,index)=> (
        //     <h1 key = {index}>hello {temp.studentName}</h1>
        //     // console.log(temp.studentName);
        // ))
        // // <h1>hello {props.argu[0].studentName}</h1>
        // </div>
        
        props.argu.map((temp, index) => (
             <h1 key={index}>hello {temp.studentName} {temp.rollNum} having index {index}</h1>
        ))
 
    );
}

export default Argu;