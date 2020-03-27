// import React, { Component } from "react";
// import "../addToCart/customerDeatils.css";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
// var APICall = require("../../congfiguration/BookStoreCallAPI");

// class CustomerDetails extends Component {
//   documentData;
//   orderBook = [];
//   constructor(props) {
//     super(props);
//     this.state = {
//       Name: "",
//       Phone_Number: "",
//       Pincode: "",
//       Email: "",
//       Address: "",
//       Locality: "",
//       city: "",
//       LandMark: "",
//       errors: {
//         Name: "",
//         Phone_Number: "",
//         Pincode: "",
//         Email: "",
//         Address: "",
//         Locality: "",
//         city: "",
//         LandMark: ""
//       },
//       formfilled: false,
//       formHide: false,
//       hidden: false,
//       divHide: false,
//       buttonHide: true,
//       item: null,
//       id: null
//     };
//     this.state.item = this.props.detail;
//     this.state.formHide = this.props.formDetails;
//   }

//   formHide = () => {
//     this.setState({ formHide: true });
//   };

//   editDetails = () => {
//     this.setState((this.state = { formfilled: !this.state.formfilled }));
//     this.setState((this.state = { buttonHide: !this.state.buttonHide }));
//     this.setState((this.state = { hidden: !this.state.hidden }));
//   };

//   handleValueChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//     this.setState({ divHide: false });
//     const { name, value } = event.target;
//     let errors = this.state.errors;
//     const phonenumber = RegExp("^[0-9]{10}$");
//     const pincode = RegExp("^[1-9][0-9]{5}$");
//     const email = RegExp(
//       "^[0-9a-zA-Z]+([-,_,+,.]{1}[0-9A-Za-z]+){0,1}@[0-9A-Za-z]+.[A-Za-z]{1,3}(.[a-zA-Z]{1,3}){0,1}$"
//     );

//     switch (name) {
//       case "Name":
//         errors.Name =
//           value.length < 2 ? "Full Name must be 5 characters long!" : "";
//         break;
//       case "Phone_Number":
//         errors.Phone_Number = phonenumber.test(value)
//           ? ""
//           : "Phone Number is not valid!";
//         break;
//       case "Pincode":
//         errors.Pincode = pincode.test(value) ? "" : "Pin code is not valid!";
//         break;
//       case "Email":
//         errors.Email = email.test(value) ? "" : "Email is not valid!";
//         break;
//       case "Address":
//         errors.Address = value.length < 5 ? "Address is not valid!" : "";
//         break;
//       case "city":
//         errors.city = value.length < 3 ? "city is not valid!" : "";
//         break;
//       case "Landmark":
//         errors.Landmark = value.length < 3 ? "Landmark is not proper!" : "";
//         break;
//       default:
//         break;
//     }

//     this.setState({ errors, [name]: value }, () => {
//       console.log(errors);
//     });
//     console.log(
//       "value of div hide in handleChangeValue function======================>",
//       this.state.divHide
//     );
//   };

//   componentWillMount() {
//     this.documentData = JSON.parse(localStorage.getItem("document"));
//     if (localStorage.getItem("document")) {
//       this.setState({
//         Name: this.documentData.NAME,
//         Phone_Number: this.documentData.MOBILENO,
//         Pincode: this.documentData.PINCODE,
//         Email: this.documentData.EMAil,
//         Locality: this.documentData.LOCALITY,
//         Address: this.documentData.ADDRESS,
//         city: this.documentData.CITY,
//         LandMark: this.documentData.LANDMARK
//       });
//     } else {
//       this.setState({
//         Name: "",
//         Phone_Number: "",
//         Pincode: "",
//         Email: "",
//         Locality: "",
//         Address: "",
//         city: "",
//         LandMark: ""
//       });
//     }
//   }

//   onSubmit = event => {
//     event.preventDefault();
//     const validateForm = errors => {
//       let valid = false;
//       if (
//         this.state.Name &&
//         this.state.Phone_Number &&
//         this.state.Pincode &&
//         this.state.Email &&
//         this.state.Address &&
//         this.state.city &&
//         this.state.LandMark &&
//         this.state.Name.length > 2 &&
//         this.state.Phone_Number.length > 9 &&
//         this.state.Pincode.length > 5 &&
//         this.state.Email.length > 3 &&
//         this.state.Address.length > 3 &&
//         this.state.city.length > 3 &&
//         this.state.LandMark.length > 3
//       ) {
//         valid = true;
//         this.setState({ divHide: false });

//         Object.values(errors).forEach(val => val.length > 0 && (valid = false));
//         return valid;
//       }
//     };
//     if (validateForm(this.state.errors)) {
//       this.setState({ formfilled: !this.state.formfilled });
//       this.setState({ buttonHide: !this.state.buttonHide });
//       this.setState({ hidden: !this.state.hidden });
//       this.setState({ divHide: true });
//     } else {
//       console.error("Invalid Form");
//     }
//     var CustomerDetails = {
//       NAME: this.state.Name,
//       EMAil: this.state.Email,
//       PINCODE: this.state.Pincode,
//       MOBILENO: this.state.Phone_Number,
//       ADDRESS: this.state.Address,
//       LOCALITY: this.state.Locality,
//       CITY: this.state.city,
//       LANDMARK: this.state.LandMark,
//       TYPE: this.state.TYPE
//     };
//     localStorage.setItem("document", JSON.stringify(CustomerDetails));
//   };

//   onCheckout = async () => {
//     const details = {
//       NAME: this.state.Name,
//       PHONE_NO: this.state.Phone_Number,
//       PIN: this.state.Pincode,
//       ADDRESS: this.state.Address,
//       CITY_TOWN: this.state.city,
//       EMAIL: this.state.Email,
//       LANDMARK: this.state.LandMark,
//       TYPE: this.state.Type
//     };
//     localStorage.clear();
//     APICall.userDetails(details).then(res => {
//       APICall.sendEmail({
//         ID: res.data.data._id,
//         EMAIL: res.data.data.EMAIL,
//         Books: this.orderBook
//       }).then(res => {});
//       this.props.checkout({ID:res.data.data._id});

//     });
//   };

//   render() {
//     const { errors } = this.state;
//     var Books = this.state.item.map((item, i) => {
//       this.orderBook = item.Title + " ";
//       return (
//         <div
//           style={{ marginLeft: "3%", marginRight: "10%", marginTop: "0.5%" }}
//         >
//           <div
//             className="divHide"
//             style={{ display: this.state.divHide ? "true" : "false" }}
//           >
//             <div>
//               <div className="cart-image">
//                 <img
//                   className="image"
//                   src={item.ImageURL}
//                   style={{
//                     height: "80px",
//                     width: "10%",
//                     marginTop: "-1%",
//                     marginLeft: "-3%"
//                   }}
//                 ></img>
//                 <div className="book-title">
//                   {item.Title}
//                   <div className="book-author">{item.Author}</div>
//                   <div className="book-price"> {item.Price}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     });
//     return (
//       <div style={{ marginTop: "3%" }}>
//         <div className="">
//           <div
//             style={{
//               borderStyle: "groove",
//               marginLeft: "17%",
//               marginRight: "10%",
//               marginTop: "-2%",
//               width: "55%"
//             }}
//           >
//             <div className="orderSummary">CustomerDetails</div>
//             <div
//               className="formHide"
//               style={{ display: this.state.formHide ? "block" : "none" }}
//             >
//               <form onSubmit={this.handleFormSubmit}>
//                 <Button
//                   className="editButton"
//                   component="span"
//                   style={{
//                     display: this.state.hidden ? "block" : "none"
//                   }}
//                   onClick={this.editDetails}
//                 >
//                   Edit
//                 </Button>

//                 <div className="content">
//                   <div className="name">
//                     <TextField
//                       id="outlined-basic"
//                       className="textField"
//                       label="Name"
//                       name="Name"
//                       required
//                       variant="outlined"
//                       value={this.state.Name}
//                       onChange={event => this.handleValueChange(event)}
//                       disabled={this.state.formfilled}
//                     />
//                     {errors.Name.length > 0 && (
//                       <span className="error">{errors.Name}</span>
//                     )}
//                   </div>
//                   <div className="phonenumber">
//                     <TextField
//                       id="outlined-basic"
//                       className="textField"
//                       label="Phone Number"
//                       name="Phone_Number"
//                       variant="outlined"
//                       required
//                       value={this.state.Phone_Number}
//                       onChange={event => this.handleValueChange(event)}
//                       disabled={this.state.formfilled}
//                     />
//                     {errors.Phone_Number.length > 0 && (
//                       <span className="error">{errors.Phone_Number}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="content">
//                   <div className="name">
//                     <TextField
//                       id="outlined-basic"
//                       className="textField"
//                       label="Pincode"
//                       variant="outlined"
//                       name="Pincode"
//                       value={this.state.Pincode}
//                       required
//                       onChange={event => this.handleValueChange(event)}
//                       disabled={this.state.formfilled}
//                     />
//                     {errors.Pincode.length > 0 && (
//                       <span className="error">{errors.Pincode}</span>
//                     )}
//                   </div>
//                   <div className="phonenumber">
//                     <TextField
//                       id="outlined-basic"
//                       className="textField"
//                       label="Email"
//                       variant="outlined"
//                       name="Email"
//                       value={this.state.Email}
//                       variant="outlined"
//                       required
//                       onChange={event => this.handleValueChange(event)}
//                       disabled={this.state.formfilled}
//                     />
//                     {errors.Email.length > 0 && (
//                       <span className="error">{errors.Email}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="address">
//                   <TextField
//                     id="outlined-multiline-static"
//                     style={{ width: "68.7%" }}
//                     label="Address"
//                     name="Address"
//                     rows="3"
//                     required
//                     value={this.state.Address}
//                     onChange={event => this.handleValueChange(event)}
//                     disabled={this.state.formfilled}
//                     variant="outlined"
//                   />
//                   {errors.Address.length > 0 && (
//                     <span className="error">{errors.Address}</span>
//                   )}
//                 </div>
//                 <div className="content">
//                   <div className="name">
//                     <TextField
//                       id="outlined-basic"
//                       className="textField"
//                       label="city/town"
//                       name="city"
//                       variant="outlined"
//                       required
//                       value={this.state.city}
//                       onChange={event => this.handleValueChange(event)}
//                       disabled={this.state.formfilled}
//                     />
//                     {errors.city.length > 0 && (
//                       <span className="error">{errors.city}</span>
//                     )}
//                   </div>
//                   <div className="phonenumber">
//                     <TextField
//                       id="outlined-basic"
//                       className="textField"
//                       label="Landmark"
//                       name="LandMark"
//                       required
//                       variant="outlined"
//                       value={this.state.LandMark}
//                       onChange={event => this.handleValueChange(event)}
//                       disabled={this.state.formfilled}
//                     />
//                     {errors.LandMark.length > 0 && (
//                       <span className="error">{errors.LandMark}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     paddingLeft: "4%",
//                     paddingBottom: "1%",
//                     marginTop: "1%"
//                   }}
//                 >
//                   Type
//                 </div>
//                 <FormControl component="fieldset" style={{ paddingLeft: "4%" }}>
//                   <RadioGroup aria-label="Type" color="primary" name="Type" row>
//                     <FormControlLabel
//                       value="Home"
//                       onChange={event => this.handleValueChange(event)}
//                       control={<Radio />}
//                       disabled={this.state.formfilled}
//                       label="Home"
//                     />

//                     <FormControlLabel
//                       value="Work"
//                       control={<Radio />}
//                       onChange={event => this.handleValueChange(event)}
//                       disabled={this.state.formfilled}
//                       label="Work"
//                     />

//                     <FormControlLabel
//                       value="Other"
//                       onChange={event => this.handleValueChange(event)}
//                       disabled={this.state.formfilled}
//                       control={<Radio />}
//                       label="Other"
//                     />
//                   </RadioGroup>
//                 </FormControl>
//                 <button
//                   className="place-order"
//                   onClick={this.onSubmit}
//                   style={{ display: this.state.buttonHide ? "flase" : "true" }}
//                 >
//                   PLACE ORDER{" "}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//         {this.state.divHide === true ? (
//           <div>
//             <div
//               style={{
//                 borderStyle: "groove",
//                 marginLeft: "17%",
//                 marginRight: "10%",
//                 marginTop: "2.9%",
//                 marginBottom: "2%",
//                 width: "55%"
//               }}
//             >
//               <div className="orderSummary">Order Summary</div>
//               {Books}
//               <div className="total-price">
//                 <p id="totalprice">Total Price: Rs.{this.props.totalAmount}</p>
//               </div>
//               <div style={{ display: this.state.divHide ? "true" : "false" }}>
//                 <button
//                   className="place-order"
//                   style={{ width: "16%", marginLeft: "", padding: "1%" }}
//                   onClick={() => this.onCheckout()}
//                 >
//                   CHECKOUT{" "}
//                 </button>{" "}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div
//             style={{
//               borderStyle: "groove",
//               marginLeft: "17%",
//               marginRight: "10%",
//               marginTop: "1%",
//               marginBottom: "3.9%",
//               width: "55%"
//             }}
//           >
//             <div className="orderSummary">Order Summary</div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// export default CustomerDetails;

import React, { Component } from "react";
import "../addToCart/customerDeatils.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Popover } from "@material-ui/core";

var APICall = require("../../congfiguration/BookStoreCallAPI");

class CustomerDetails extends Component {
  documentData;
  orderBook = [];
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Phone_Number: "",
      Pincode: "",
      Email: "",
      Address: "",
      Locality: "",
      city: "",
      LandMark: "",
      errors: {
        Name: "",
        Phone_Number: "",
        Pincode: "",
        Email: "",
        Address: "",
        Locality: "",
        city: "",
        LandMark: ""
      },
      formfilled: false,
      formHide: false,
      hidden: false,
      divHide: false,
      buttonHide: true,
      item: null,
      id: null,
      open: false
    };
    this.state.item = this.props.detail;
    this.state.formHide = this.props.formDetails;
  }

  formHide = () => {
    this.setState({ formHide: true });
  };

  editDetails = () => {
    this.setState((this.state = { formfilled: !this.state.formfilled }));
    this.setState((this.state = { buttonHide: !this.state.buttonHide }));
    this.setState((this.state = { hidden: !this.state.hidden }));
  };

  handleValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ divHide: false });
    const { name, value } = event.target;
    let errors = this.state.errors;
    const phonenumber = RegExp("^[0-9]{10}$");
    const pincode = RegExp("^[1-9][0-9]{5}$");
    const email = RegExp(
      "^[0-9a-zA-Z]+([-,_,+,.]{1}[0-9A-Za-z]+){0,1}@[0-9A-Za-z]+.[A-Za-z]{1,3}(.[a-zA-Z]{1,3}){0,1}$"
    );

    switch (name) {
      case "Name":
        errors.Name = value.length < 2 ? "Full Name must be 5 characters long!" : "";
        break;
      case "Phone_Number":
        errors.Phone_Number = phonenumber.test(value) ? "" : "Phone Number is not valid!";
        break;
      case "Pincode":
        errors.Pincode = pincode.test(value) ? "" : "Pin code is not valid!";
        break;
      case "Email":
        errors.Email = email.test(value) ? "" : "Email is not valid!";
        break;
      case "Address":
        errors.Address = value.length < 5 ? "Address is not valid!" : "";
        break;
      case "city":
        errors.city = value.length < 3 ? "city is not valid!" : "";
        break;
      case "Landmark":
        errors.Landmark = value.length < 3 ? "Landmark is not proper!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
    console.log(
      "value of div hide in handleChangeValue function======================>",
      this.state.divHide
    );
  };

  componentWillMount() {
    this.documentData = JSON.parse(localStorage.getItem("document"));
    if (localStorage.getItem("document")) {
      this.setState({
        Name: this.documentData.NAME,
        Phone_Number: this.documentData.MOBILENO,
        Pincode: this.documentData.PINCODE,
        Email: this.documentData.EMAil,
        Locality: this.documentData.LOCALITY,
        Address: this.documentData.ADDRESS,
        city: this.documentData.CITY,
        LandMark: this.documentData.LANDMARK
      });
    } else {
      this.setState({
        Name: "",
        Phone_Number: "",
        Pincode: "",
        Email: "",
        Locality: "",
        Address: "",
        city: "",
        LandMark: ""
      });
    }
  }

  onSubmit = event => {
    event.preventDefault();
    const validateForm = errors => {
      let valid = true;
      if (
        this.state.Name &&
        this.state.Phone_Number &&
        this.state.Pincode &&
        this.state.Email &&
        this.state.Address &&
        this.state.city &&
        this.state.LandMark &&
        this.state.Name.length > 2 &&
        this.state.Phone_Number.length > 9 &&
        this.state.Pincode.length > 5 &&
        this.state.Email.length > 3 &&
        this.state.Address.length > 3 &&
        this.state.city.length > 3 &&
        this.state.LandMark.length > 3
      ) {
        this.setState({open : false});
        this.setState({ divHide: false });
        this.setState({ validation: true });

        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        return valid;
      }
    };
    if (validateForm(this.state.errors)) {
      this.setState({ formfilled: !this.state.formfilled });
      this.setState({ buttonHide: !this.state.buttonHide });
      this.setState({ hidden: !this.state.hidden });
      this.setState({ divHide: true });
      this.setState({open : false});

    } else {
      console.error("Invalid Form");
      this.setState({open : true});
    }
    var CustomerDetails = {
      NAME: this.state.Name,
      EMAil: this.state.Email,
      PINCODE: this.state.Pincode,
      MOBILENO: this.state.Phone_Number,
      ADDRESS: this.state.Address,
      LOCALITY: this.state.Locality,
      CITY: this.state.city,
      LANDMARK: this.state.LandMark,
      TYPE: this.state.TYPE
    };
    localStorage.setItem("document", JSON.stringify(CustomerDetails));
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  onCheckout = async () => {
    const details = {
      NAME: this.state.Name,
      PHONE_NO: this.state.Phone_Number,
      PIN: this.state.Pincode,
      ADDRESS: this.state.Address,
      CITY_TOWN: this.state.city,
      EMAIL: this.state.Email,
      LANDMARK: this.state.LandMark,
      TYPE: this.state.Type
    };
    localStorage.clear();
    APICall.userDetails(details).then(res => {
      APICall.sendEmail({
        ID: res.data.data._id,
        EMAIL: res.data.data.EMAIL,
        Books: this.orderBook
      }).then(res => {});
    });
    this.props.checkout(details);
  };

  render() {
    const { errors } = this.state;
    var Books = this.state.item.map((item, i) => {
      this.orderBook = item.Title + " ";
      return (
        <div
          style={{ marginLeft: "3%", marginRight: "10%", marginTop: "0.5%" }}
        >
          <div
            className="divHide"
            style={{ display: this.state.divHide ? "true" : "false" }}
          >
            <div>
              <div className="cart-image">
                <img
                  className="image"
                  src={item.ImageURL}
                  style={{
                    height: "80px",
                    width: "10%",
                    marginTop: "-1%",
                    marginLeft: "-3%"
                  }}
                ></img>
                <div className="book-title">
                  {item.Title}
                  <div className="book-author">{item.Author}</div>
                  <div className="book-price"> {item.Price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div style={{ marginTop: "3%" }}>
        <div className="">
          <div
            style={{
              borderStyle: "groove",
              marginLeft: "17%",
              marginRight: "10%",
              marginTop: "-2%",
              width: "55%"
            }}
          >
            <div className="orderSummary">CustomerDetails</div>
            <div
              className="formHide"
              style={{ display: this.state.formHide ? "block" : "none" }}
            >
              <form onSubmit={this.handleFormSubmit}>
                <Button
                  className="editButton"
                  component="span"
                  style={{
                    display: this.state.hidden ? "block" : "none"
                  }}
                  onClick={this.editDetails}
                >
                  Edit
                </Button>

                <div className="content">
                  <div className="name">
                    <TextField
                      id="outlined-basic"
                      className="textField"
                      label="Name"
                      name="Name"
                      required
                      variant="outlined"
                      value={this.state.Name}
                      onChange={event => this.handleValueChange(event)}
                      disabled={this.state.formfilled}
                    />
                    {errors.Name.length > 0 && (
                      <span className="error">{errors.Name}</span>
                    )}
                  </div>
                  <div className="phonenumber">
                    <TextField
                      id="outlined-basic"
                      className="textField"
                      label="Phone Number"
                      name="Phone_Number"
                      variant="outlined"
                      required
                      value={this.state.Phone_Number}
                      onChange={event => this.handleValueChange(event)}
                      disabled={this.state.formfilled}
                    />
                    {errors.Phone_Number.length > 0 && (
                      <span className="error">{errors.Phone_Number}</span>
                    )}
                  </div>
                </div>
                <div className="content">
                  <div className="name">
                    <TextField
                      id="outlined-basic"
                      className="textField"
                      label="Pincode"
                      variant="outlined"
                      name="Pincode"
                      value={this.state.Pincode}
                      required
                      onChange={event => this.handleValueChange(event)}
                      disabled={this.state.formfilled}
                    />
                    {errors.Pincode.length > 0 && (
                      <span className="error">{errors.Pincode}</span>
                    )}
                  </div>
                  <div className="phonenumber">
                    <TextField
                      id="outlined-basic"
                      className="textField"
                      label="Email"
                      variant="outlined"
                      name="Email"
                      value={this.state.Email}
                      variant="outlined"
                      required
                      onChange={event => this.handleValueChange(event)}
                      disabled={this.state.formfilled}
                    />
                    {errors.Email.length > 0 && (
                      <span className="error">{errors.Email}</span>
                    )}
                  </div>
                </div>
                <div className="address">
                  <TextField
                    id="outlined-multiline-static"
                    style={{ width: "68.7%" }}
                    label="Address"
                    name="Address"
                    rows="3"
                    required
                    value={this.state.Address}
                    onChange={event => this.handleValueChange(event)}
                    disabled={this.state.formfilled}
                    variant="outlined"
                  />
                  {errors.Address.length > 0 && (
                    <span className="error">{errors.Address}</span>
                  )}
                </div>
                <div className="content">
                  <div className="name">
                    <TextField
                      id="outlined-basic"
                      className="textField"
                      label="city/town"
                      name="city"
                      variant="outlined"
                      required
                      value={this.state.city}
                      onChange={event => this.handleValueChange(event)}
                      disabled={this.state.formfilled}
                    />
                    {errors.city.length > 0 && (
                      <span className="error">{errors.city}</span>
                    )}
                  </div>
                  <div className="phonenumber">
                    <TextField
                      id="outlined-basic"
                      className="textField"
                      label="Landmark"
                      name="LandMark"
                      required
                      variant="outlined"
                      value={this.state.LandMark}
                      onChange={event => this.handleValueChange(event)}
                      disabled={this.state.formfilled}
                    />
                    {errors.LandMark.length > 0 && (
                      <span className="error">{errors.LandMark}</span>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    paddingLeft: "4%",
                    paddingBottom: "1%",
                    marginTop: "1%"
                  }}
                >
                  Type
                </div>
                <FormControl component="fieldset" style={{ paddingLeft: "4%" }}>
                  <RadioGroup aria-label="Type" color="primary" name="Type" row>
                    <FormControlLabel
                      value="Home"
                      onChange={event => this.handleValueChange(event)}
                      control={<Radio />}
                      disabled={this.state.formfilled}
                      label="Home"
                    />

                    <FormControlLabel
                      value="Work"
                      control={<Radio />}
                      onChange={event => this.handleValueChange(event)}
                      disabled={this.state.formfilled}
                      label="Work"
                    />

                    <FormControlLabel
                      value="Other"
                      onChange={event => this.handleValueChange(event)}
                      disabled={this.state.formfilled}
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>

                <button
                  className="place-order"
                  onClick={this.onSubmit}
                  style={{ display: this.state.buttonHide ? "false" : "true" }}
                >
                  PLACE ORDER{" "}
                </button>
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
                    Please Enter All The Required Details
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
              </form>
            </div>
          </div>
        </div>

        {this.state.divHide === true ? (
          <div>
            <div
              style={{
                borderStyle: "groove",
                marginLeft: "17%",
                marginRight: "10%",
                marginTop: "2.9%",
                marginBottom: "2%",
                width: "55%"
              }}
            >
              <div className="orderSummary">Order Summary</div>
              {Books}
              <div className="total-price">
                <p id="totalprice">Total Price: Rs.{this.props.totalAmount}</p>
              </div>
              <div style={{ display: this.state.divHide ? "true" : "false" }}>
                <button
                  className="place-order"
                  style={{ width: "16%", marginLeft: "", padding: "1%" }}
                  onClick={() => this.onCheckout()}
                >
                  CHECKOUT{" "}
                </button>{" "}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div
              style={{
                borderStyle: "groove",
                marginLeft: "17%",
                marginRight: "10%",
                marginTop: "1%",
                marginBottom: "3.9%",
                width: "55%"
              }}
            >
              <div className="orderSummary">Order Summary</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default CustomerDetails;