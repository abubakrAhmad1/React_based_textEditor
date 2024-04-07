import React from 'react'
import ArguSender from './ArguSender'
import NavWithArgu from './NavWithArgu'

const Display = () => {

    const arr = [
        {
            studentName:"abubakar",
            rollNum: 39,
        }, 
        {
            studentName:"ali",
            rollNum:20,
        }
    ]
    const title ="alviGroup";
    const typeOfProduct = "graments";
    return (
        // <NavWithArgu title="alviGroup" productType = "Suits" />
        <NavWithArgu title={title}  productType = {typeOfProduct}/>
        // <ArguSender argu = {arr}/>
    );
}

export default Display;
// export default two;
//we can either write export default Display(), if we want to export only Display()
//or we can write export default display_two(),if we want to export only display_two()