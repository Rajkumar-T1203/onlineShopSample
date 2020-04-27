import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import HomePage  from './pages/homePage'
import './App.css';

const HatsPage = (props) => (
  <div>
    HatsPage
  </div>
)
 const Women = (props) => {
   console.log(props)

   return (
     
    <div><Link to  = '/HatsPage'> HatsPage </Link>
    <button onClick = {() => props.history.push('/')}>HomePage</button>
   
    </div>
   )
 }
 const Men = (props) => {
  console.log(props.match.url)

  return (
   <div>{props.match.params.ids}
    <Link to  = {`${props.match.url}/13`}> Men12 </Link>
    <Link to  = {`${props.match.url}/17`}> Men17 </Link>
    <Link to  = {`${props.match.url}/21`}> Men21 </Link>
   </div>
  )
}
const MenList = (props) => {
  console.log(props)

  return (
   <div>{props.match.params.ids}
   
   </div>
  )
}
function App() {
  return (
   <div>
     {/* exact = true : it should match the exact path 
     E.g. http://localhost:3000/ */}
     <Switch>
    <Route exact path = "/" component = {HomePage}></Route>
      {/* if not exact  not necessary to match  the exact path 
      E.g. http://localhost:3000/HatsPage/ff/ttt */}
    <Route  path = "/shop/hats" component = {HatsPage}></Route>
    </Switch>
    <Route  path = "/Women" component = {Women}></Route>
    <Route exact path = "/tt/Men" component = {Men}></Route>
    {/* :ids its a param passed in url for dynamic routing*/}
    <Route  path = "/tt/Men/:ids" component = {MenList}></Route>
    
    <Route exact path = "/uu/tt/Men" component = {Men}></Route>
    {/* :ids its a param passed in url for dynamic routing*/}
    <Route  path = "/uu/tt/Men/:ids" component = {MenList}></Route>
   </div>
  );
}

export default App;
