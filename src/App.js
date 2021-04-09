import "./App.css";
import Navbar from "./Component/Navbar";
import AboutMe from "./Component/AboutMe";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Microsite from "./Component/microsite";
import SplashScreen from "./Component/SplashScreen";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <div className="app">
      <div className="app__splashScreen">
        <SplashScreen />
      </div>
      <Navbar />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 1000, exit: 1000 }}
              classNames="slide">
              <Switch location={location}>
                <Route exact path="/" component={AboutMe} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/microsite" component={Microsite} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
