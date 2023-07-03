import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavbarFolder/Navbar';
import Home from './components/HomeFolder/Home';
// import About from './components/About/About';
import Programs from './components/ProgramsFolder/Programs';
import Coaches from './components/CoachesFolder/Coaches';
import Facilities from './components/FacilitiesFolder/Facilities';
// import Schedule from './components/Schedule/Schedule';
// import Registration from './components/Registration/Registration';
// import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/facilities" component={Facilities} />
        <Route path="/coaches" component={Coaches} />
        <Route path="/programs" component={Programs} />
      </Switch>
    </Router>
  );
};

export default App;