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
    scoreAscDes: null
  }


  
  
  scoreState = () => {
    this.setState({scoreAscDes: 'test'})
    alert("scoreState ran")
  }
  
  
  render(){
    


    return(
  <div className="AppWrapper">
    <BrowserRouter>
      <NavBarbs scoreAscDes={this.state.scoreAscDes} changeScoreState={this.scoreState.bind(this, 'new something')}/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/scoredes" component={(props) => <Scores {...props} title={this.state.title}/>}/>
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
