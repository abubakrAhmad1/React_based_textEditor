import React from "react";
import InputBox from "./InputBox";
import ArguNav from "./NavWithArgu";


//
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./About";

function CaseConver() {
  return (
    <>
      <BrowserRouter>        
      <ArguNav title="Text Changer.!" />
      
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/start">
            <div className="container">
              <InputBox />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default CaseConver;
