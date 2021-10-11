import { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigationbar from './NavigationBar';
import WelcomePage from './WelcomePage';
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard';
import SelectedQuestion from './SelectedQuestion';
import SelectedPoll from './SelectedPoll';


function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Navigationbar />
        <Switch>
          <Route exact path='/' component= { WelcomePage } />
          <Route exact path='/home' component = { Home } />
          <Route path='/newQuestion' component= { NewQuestion } />
          <Route path='/questions/:id' component= {SelectedQuestion}/>
          <Route path='/leaderBoard' component= { LeaderBoard } />
          <Route path='/poll/:pollId' component= { SelectedPoll } />
        </Switch>
     </BrowserRouter>
    </Fragment>
  );
}

export default App;
