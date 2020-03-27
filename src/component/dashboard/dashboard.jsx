import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "../dashboard/dashboard.css";
class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: false,
      title: "",
      addToCart: [],
      WishListTitle: null,
      WishListAuthor: null,
      WishListImageURL: null,
      addToWishList: [],
      widths: 80,
      message: "ADD TO BAG",
      button1: "buttonTrue",
      backgroundColor: "#800000"
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleWishListButtonClick = this.handleWishListButtonClick.bind(this);
  }
  async handleButtonClick() {
    if (this.state.button1 === "buttonTrue") {
      var addToCartBook = {
        Title: this.props.value.TITLE,
        Author: this.props.value.AUTHOR,
        ImageURL: this.props.value.IMAGEURL,
        Price: this.props.value.PRICE
      };
      this.props.getBook(addToCartBook);
      this.setState({
        open: true,
        widths: 165,
        color: "black",
        message: "Added To Bag",
        backgroundColor: "blue",
        button1: "buttonFalse"
      });
    }
  }
  async handleWishListButtonClick(event) {
    var addToWishList = {
      Title: this.props.value.TITLE,
      Author: this.props.value.AUTHOR,
      ImageURL: this.props.value.IMAGEURL,
      Price: this.props.value.PRICE
    };
    this.props.getWishBook(addToWishList);
    this.setState({ open: true, width: 165 });
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Card
          style={{
            maxWidth: 180,
            height: 270,
            marginLeft: 80,
            marginTop: 20,
            boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s"
          }}
        >
          {this.props.value.NOOFCOUNT === 0 ? (
            <div>
              <img
                className="imagePath"
                src={this.props.value.IMAGEURL}
                style={{
                  opacity: 0.5,
                  height: "150px",
                  width: "70%",
                  marginTop: "6%",
                  marginLeft: "15%"
                }}
                alt="no Cover"
              />
              <div style={{ marginTop: "-10%" }}>
                <h3
                  style={{
                    backgroundColor: "transparent",
                    fontStyle: "arial",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-20%",
                    marginLeft: 13,
                    marginRight: 13
                  }}
                >
                  OUT OF STOCK
                </h3>
              </div>

              <CardActionArea>
                <Tooltip title={this.props.value.DESCRIPTION} arrow>
                  <div className="xyz"></div>
                </Tooltip>
                <CardContent>
                  <Typography
                    style={{
                      fontFamily: "Times New Roman",
                      color: "black",
                      marginTop: -10,
                      fontSize: 10,
                      marginLeft: 10
                    }}
                  >
                    {this.props.value.TITLE}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    style={{
                      fontFamily: "Times New Roman",
                      color: "grey",
                      marginTop: -30,
                      fontSize: 10,
                      marginLeft: 10
                    }}
                  >
                    {this.props.value.AUTHOR}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    style={{
                      fontFamily: "Times New Roman",
                      color: "black",
                      fontSize: 10,
                      marginLeft: 10,
                      marginTop: -45
                    }}
                  >
                    {this.props.value.PRICE}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </div>
          ) : (
            <div>
              <CardActionArea>
                <Tooltip title={this.props.value.DESCRIPTION} arrow>
                  <div className="xyz">
                    <img
                      className="imagePath"
                      src={this.props.value.IMAGEURL}
                      style={{
                        height: "150px",
                        width: "70%",
                        marginTop: "6%",
                        marginLeft: "15%"
                      }}
                      alt="no Cover"
                    />
                  </div>
                </Tooltip>
                <CardContent>
                  <Typography
                    style={{
                      fontFamily: "Times New Roman",
                      color: "black",
                      marginTop: -10,
                      fontSize: 10,
                      marginLeft: 10
                    }}
                  >
                    {this.props.value.TITLE}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    style={{
                      fontFamily: "Times New Roman",
                      color: "grey",
                      marginTop: -30,
                      fontSize: 10,
                      marginLeft: 10
                    }}
                  >
                    {this.props.value.AUTHOR}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    style={{
                      fontFamily: "Times New Roman",
                      color: "black",
                      fontSize: 10,
                      marginLeft: 10,
                      marginTop: -45
                    }}
                  >
                    {this.props.value.PRICE}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="bookdiv">
                <div className="button1">
                  <Button
                    onClick={this.handleButtonClick}
                    className={this.state.button ? "buttonTrue" : "buttonFalse"}
                    style={{
                      border: "none",
                      backgroundColor: this.state.backgroundColor,
                      color: "white",
                      textDecoration: "none",
                      display: "inlineBlock",
                      transitionDuration: 0.4,
                      marginTop: -70,
                      width: this.state.widths,
                      height: 30,
                      fontSize: "0.60em"
                    }}
                  >
                    {this.state.message}
                  </Button>
                </div>
                <div className="button2">
                  <Button
                    onClick={this.handleWishListButtonClick}
                    disabled={!this.state.button}
                    className={this.state.button ? "buttonTrue" : "buttonFalse"}
                    style={{
                      borderStyle: "solid",
                      borderWidth: "thin",
                      width: 74,
                      height: 30,
                      marginTop: -70,
                      fontFamily: "Times New Roman",
                      color: "black",
                      fontSize: "0.60em"
                    }}
                  >
                    Wishlist
                  </Button>
                  <Snackbar
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                    open={this.state.open}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    ContentProps={{
                      "aria-describedby": "message-id"
                    }}
                    message={
                      <span id="message-id">
                        book : {this.props.value.TITLE} <br></br>author :{" "}
                        {this.props.value.AUTHOR} <br></br>price :{" "}
                        {this.props.value.PRICE} <br></br>added successfully
                      </span>
                    }
                    action={[
                      <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={this.handleClose}
                      >
                        <CloseIcon />
                      </IconButton>
                    ]}
                  />
                </div>
              </CardActions>
            </div>
          )}
        </Card>
      </div>
    );
  }
}
export default dashboard;
