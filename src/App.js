import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div>

      {/* all copmonents are used for routing. 
      and here header and footer are fixed in every route */}
      
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/courses/registration">
            <Registration></Registration>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
