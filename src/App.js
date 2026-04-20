import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import ProgrammingFundamentals from './pages/ProgrammingFundamentals';

const ComingSoon = ({ title }) => (
  <div className="min-h-screen bg-[#0b1020] text-white flex items-center justify-center">
    <div className="text-center p-8">
      <h1 className="text-3xl font-black mb-4">{title}</h1>
      <p className="text-slate-400">Coming Soon!</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/programming-fundamentals" component={ProgrammingFundamentals} />
        <Route path="/scratch-level-1" render={() => <ComingSoon title="Scratch Level 1" />} />
        <Route path="/scratch-level-2" render={() => <ComingSoon title="Scratch Level 2" />} />
        <Route path="/html-css" render={() => <ComingSoon title="HTML & CSS" />} />
        <Route path="/javascript-basics" render={() => <ComingSoon title="JavaScript Basics" />} />
        <Route path="/python-basics" render={() => <ComingSoon title="Python Basics" />} />
        <Route path="/python-api" render={() => <ComingSoon title="Python API Development" />} />
      </Switch>
    </Router>
  );
}

export default App;