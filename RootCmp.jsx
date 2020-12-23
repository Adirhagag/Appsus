import { MailApp } from './apps/Mail/MailApp.jsx'
import { KeepApp } from './apps/Keep/KeepApp.jsx'
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
            <Route path="/mail" component={MailApp} />
            <Route path="/keep" component={KeepApp} />
            <Route path="/" component={Home} />
          </Switch>
        </section>
      </Router>
    );
  }
}