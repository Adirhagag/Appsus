import { EmailApp } from './apps/Email/EmailApp.jsx'
import { NoteApp } from './apps/Notes/NoteApp.jsx'
import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
// const { Link } = ReactRouterDOM;


const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export class RootCmp extends React.Component {


  render() {
    return (
      <Router>
        <section className="app">
          <AppHeader />
          {/* <UserMsg /> */}
          <Switch>
            {/* <Route path="/book" component={BookApp} /> */}
            <Route path="/email" component={EmailApp} />
            <Route path="/note" component={NoteApp} />
            <Route path="/" component={Home} />
          </Switch>
        </section>
      </Router>
    );
  }
}