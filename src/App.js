import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BookStoreFirstPage from './component/FrontPage/BookStoreFirstPage'
import CustDetails from './component/addToCart/addToCart'
import Checkout from './component/checkout/checkout'
import AddBook from './component/addBook/boodAdd'
import SignUp from './component/login/SignUpForm'
import SignIn from './component/login/SignInForm'
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path = "/" component = {BookStoreFirstPage} exact = {true}/>
        <Route path = "/addToCart" component = {CustDetails}/>
        <Route path = "/checkout" component = {Checkout}/>
        <Route path = "/login" component = {SignIn}/>
        <Route path = "/addBook" component = {AddBook}/>
        <Route path = "/signup" component = {SignUp}/>
        
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
