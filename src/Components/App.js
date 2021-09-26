import { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigationbar from './NavigationBar';
import WelcomePage from './WelcomePage';
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navigationbar />
        <Switch>
          <Route exact path='/' component= { WelcomePage } />
          <Route exact path='/Home' component= { Home } />
          <Route exact path='/NewQuestion' component= { NewQuestion } />
          <Route exact path='/LeaderBoard' component= { LeaderBoard } />
        </Switch>
     </BrowserRouter>
    </Fragment>
  );
}

export default App;
