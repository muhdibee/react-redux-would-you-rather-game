import { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigationbar from './NavigationBar';
import WelcomePage from './WelcomePage';
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard';
import SelectedQuestion from './SelectedQuestion';
import SelectedPoll from './SelectedPoll';
import ErrorPage from './ErrorPage';


function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Navigationbar />
        <Switch>
          <Route exact path='/' component= { WelcomePage } />
          <Route path='/home' component = { Home } />
          <Route path='/add' component= { NewQuestion } />
          <Route path='/leaderboard' component= { LeaderBoard } />
          <Route path='/questions/:id' component= {SelectedQuestion}/>
          <Route path='/polls/:id' component= { SelectedPoll } />
          <Route component= { ErrorPage } />
        </Switch>
     </BrowserRouter>
    </Fragment>
  );
}

export default App;
