import { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigationbar from './NavigationBar';
import WelcomePage from './WelcomePage';
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard';
import selectedQuestion from './selectedQuestion';


function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Navigationbar />
        <Switch>
          <Route exact path='/' component= { WelcomePage } />
          <Route exact path='/home' component = { Home } />
          <Route path='/newQuestion' component= { NewQuestion } />
          <Route path='/questions/:id' component= {selectedQuestion}/>
          <Route path='/leaderBoard' component= { LeaderBoard } />
        </Switch>
     </BrowserRouter>
    </Fragment>
  );
}

export default App;
