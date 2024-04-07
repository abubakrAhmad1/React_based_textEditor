import React from 'react'
import {Link,BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Other from './Other';

function About() {
return (
    <>
    <Router>
    <h1>This is About Page</h1>
    <Link to="/other">CLick here to go Others Page</Link>
    
        <Switch>
            <Route exact path ="/other">
                <Other/>
            </Route>
        </Switch>
    </Router>
    </>
);
}

export default About;