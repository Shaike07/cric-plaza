import React,{Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Users from './Users';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Links = () => (
    <div class="row">
        <nav className='btn-group btn-group-lg'>
            <button class='btn btn-info'><NavLink exact to='/'>Home</NavLink></button>
            <button class='btn btn-info'><NavLink to='/users'>Users</NavLink></button>
            <button class='btn btn-info'><NavLink to='/about'>About</NavLink></button>
        </nav>
    </div>
)

export default class App extends Component{
    render(){
        return (
            <Router>
                <Links />
                <Route exact path='/' component={Home} />
                <Route exact path='/users' component={Users} />
                <Route path='/about' component={About} />
                <Route path='/users/:id' component={Profile} />
            </Router>
        )
    }
}

const Home = () => <h1 class='welcome'>Welcome to Cricket Plaza !</h1>
const About = () => <h1 class='welcome'>You dont play for the <b>Crowd</b>...You play for the <b>Country</b> </h1>