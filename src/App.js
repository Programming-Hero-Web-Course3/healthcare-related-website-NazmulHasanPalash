import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import Booking from './component/Booking/Booking';
import PrivateRoute from './component/PrivateRouter/PrivateRouter';
import AuthProvider from './component/context/AuthProvider';
import Register from './component/Register/Register';

function App() {
  return (

    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route exact path="/home">
              <Home></Home>

            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/register">
              <Register></Register>

            </Route>
            <Route exact path="/login">
              <Login></Login>

            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router></AuthProvider>
    </div>
  )
}

export default App;