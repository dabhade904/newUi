import React, { Component } from 'react';
import '../addToCart/addToCart.css'
import Customer from '../addToCart/customerDeatils'
import TopBar from "../topbar/navbar";
import { withRouter } from 'react-router-dom';
import Footer from "../footer/footer";
class CartIcon extends Component {
    constructor(props) {
        super(props)
        this.count = 1
        this.state = {
            item: null,
            purchaseBookIndividualCount: [],
            totalPrice: 0,
            hideForm: false,
            callCustomer: null, 
        }
        this.state.item = this.props.history.location.state
        this.state.item.map((item) => {
            { this.state.totalPrice = this.state.totalPrice + parseInt(item.Price) }
        })
    }
    

    onClick = () => {
        this.setState(this.state = { hideForm: !this.state.hideForm })
    }

    checkout = (data) => {
        this.props.history.push( { pathname : '/checkout', state :data })
    }

    decrement = (i, price) => {
        if (this.state.purchaseBookIndividualCount[i] !== undefined) {
            if (this.state.purchaseBookIndividualCount[i] > 1) {
                this.state.purchaseBookIndividualCount[i]--;
                this.setState({ purchaseBookIndividualCount: this.state.purchaseBookIndividualCount });
                this.state.totalPrice = this.state.totalPrice - parseInt(price);
                this.setState({ totalPrice: this.state.totalPrice })
            }
        }
    }

    increment = (i, price) => {
        if (this.state.purchaseBookIndividualCount[i] !== undefined) {
            this.state.purchaseBookIndividualCount[i]++;
            this.setState({ purchaseBookIndividualCount: this.state.purchaseBookIndividualCount });
            this.state.totalPrice = this.state.totalPrice + parseInt(price);
            this.setState({ totalPrice: this.state.totalPrice })
        }
    }


    remove = (i, price) => {
        this.state.totalPrice = this.state.totalPrice - (parseInt(price) * this.state.purchaseBookIndividualCount[i]);
        this.setState({ totalPrice: this.state.totalPrice })
        this.state.item.splice(i, 1);
        this.setState({ item: this.state.item })
        localStorage.setItem("document",JSON.stringify(this.state.item));
    }
    render() {
     var Books = this.props.history.location.state.map((item, i) => {
            this.state.purchaseBookIndividualCount.push(1)
            if (item != undefined) {
                console.log(item.Title);
                return (
                    <div>
                        <div className="cart-image1">
                            <img className="image" src={item.ImageURL}
                             style={{
                                height: "80px",
                                width: "9.5%",
                                marginLeft: "-3%"
                             }}></img>
                             <div className="book-title">
                            <div >{item.Title}</div>
                            <div className="book-author"style={{fontSize:"70%"}}>{item.Author}</div>
                                <div className="book-price" >Rs.{item.Price}</div>
                                <div style={{marginTop:"6%"}}>
                                    <button className="minus" onClick={() => { this.decrement(i, item.Price) }}>-</button>
                                    <input className="text" value={this.state.purchaseBookIndividualCount[i]} ></input>
                                    <button className="plus" onClick={() => { this.increment(i, item.Price) }}>+</button>
                                    <button className="remove" onClick={() => { this.remove(i, item.Price) }}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
      })
        return (
            <div>
                <TopBar></TopBar>
            
            <div>
                <div style={{ borderStyle: "groove", marginLeft: "17%", marginRight: "10%", marginTop: "2%", width: "55%" }}>
                    <div className="cart-title">My Cart({this.state.item.length})</div>
                    {Books}
                    <div s>
                    <div className="total-price"><p id="totalprice">Total Price: Rs.{this.state.totalPrice}</p></div>
                    <button className="place-order" onClick={this.onClick} >PLACE ORDER </button>
                    </div>
                </div>
                <div>
                    {this.state.item.length >= 1 & this.state.hideForm ?
                        <Customer detail={this.state.item} formDetails={this.state.hideForm} checkout = {this.checkout} value = {this.state.placeorder} totalAmount = {this.state.totalPrice} />
                        :
                        <div> <Customer detail={this.state.item} formDetails={this.state.hideForm}  />
                        </div>
                    }
                </div> 

            </div>
            <Footer></Footer>
            </div>
        )
    }
}
export default withRouter(CartIcon);