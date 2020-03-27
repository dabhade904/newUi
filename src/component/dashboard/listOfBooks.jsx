import React, { Component } from "react";
import Dashboard from "../dashboard/dashboard";
import Footer from "../footer/footer";
import Pagination from '@material-ui/lab/Pagination';
class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToCart : [],
      addToWishList:[]
    }
  }

  getbook = (value) => {
    this.state.addToCart.push(value)
    this.props.getBookToaddToCart(this.state.addToCart)
  }

  getWishBook=(value)=>{
    this.state.addToWishList.push(value)
    this.props.getBookToWishList(this.state.addToWishList)
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <div style={{ display: "flex", flexWrap: "wrap",marginLeft:"100px",marginTop:"-40px"}}>
                  {this.props.bookList.map((value, index) => {
                return <Dashboard key={index} value={value} getBook = {this.getbook} getWishBook={this.getWishBook}></Dashboard>;
              })}
            </div>
            
          </div>
          <Pagination shape = "rounded" style={{display:"flex",justifyContent:"center",marginTop:"50px",marginBottom:"20px"}} count={Math.ceil(this.props.noOfRecord / 12)}
            onChange = {this.props.handleChange}/>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
export default dashboard;
