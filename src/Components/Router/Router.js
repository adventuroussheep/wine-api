import React, {Component} from "react";
import "./router.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBarbs from "../NavBar/NavBarbs";
import App from "../../App";
import NotFound from "../404/404";
import Scores from "../Score/Score";

class Router extends Component{

  state={
    routerState: true,
    title: 'asdfasdfasdf',
    scoreAscDes: localStorage.getItem('scoreLocalStorage') || '-score',
    yearSelectionChild: ''
  }


  // yearSelectFunc = () => {
  //   this.setState({yearSelectionChild} => ({yearSelectionChild: {...yearSelectionChild, yearSelectFunc}}))
  // }
  
  
  scoreStateDesc = () => {
    this.setState({scoreAscDes: '-score'}, () => {
      localStorage.setItem('scoreLocalStorage', this.state.scoreAscDes);
      alert(this.state.scoreAscDes);
    })
  }

  scoreStateAsc = () => {
    this.setState({scoreAscDes: 'score'}, () => {
      localStorage.setItem('scoreLocalStorage', this.state.scoreAscDes);
      alert(this.state.scoreAscDes);
    })
  }
  
  
  render(){
    


    return(
  <div className="AppWrapper">
    <BrowserRouter>
      <NavBarbs scoreAscDes={this.state.scoreAscDes} scoreStateDesc={this.scoreStateDesc.bind(this, 'new something')} scoreStateAsc={this.scoreStateAsc.bind(this, "new something")}/>
      <Switch>
        <Route exact path="/" component={App}/>


        <Route exact path="/scoredes" component={(props) => <Scores {...props} /> }/>

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
    )
  }

}
// const Router = () => (
//   <div className="AppWrapper">
//     <BrowserRouter>
//       <NavBarbs checkVisibility={false}/>
//       <Switch>
//         <Route exact path="/" component={App} checkVisibility={false}/>
//         <Route exact path="/scoredes" component={Scores} />
//         <Route component={NotFound} />
//       </Switch>
//     </BrowserRouter>
//   </div>
// );

export default Router;
