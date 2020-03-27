import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
var APICall = require("../../congfiguration/BookStoreCallAPI");
const emailRegex = RegExp(
  "^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$"
);
const mobileRegex = RegExp("^[0-9]{2}\\s[0-9]{10}$");
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      EMAIL: null,
      PASSWORD: null,
      NAME: null,
      CONTACT: null,
      formErrors: {
        EMAIL: "",
        PASSWORD: "",
        NAME: "",
        CONTACT: "",
        hasAgreed: false
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "EMAIL":
        formErrors.EMAIL = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "PASSWORD":
        formErrors.PASSWORD =
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      case "NAME":
        formErrors.NAME =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "CONTACT":
        formErrors.CONTACT = mobileRegex.test(value)
          ? ""
          : "minimum 10 characaters required";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  handleSubmit(e) {
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.NAME}
        Email: ${this.state.EMAIL}
        Password: ${this.state.PASSWORD}
        contact:${this.state.CONTACT}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }
  submit = () => {
    var adminDetails = {
      NAME: this.state.NAME,
      EMAIL: this.state.EMAIL,
      PASSWORD: this.state.PASSWORD,
      MOBILENO: this.state.CONTACT
    };
    APICall.adminDetails(adminDetails).then(res => {
      console.log("after craete data", res.data.data);
    });
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div
        className="FormCenter"
        style={{
          marginTop: "5%",
          marginLeft: "30%",
          height: "auto",
          width: "50%",
          borderStyle: "outset"
        }}
      >
        <form onSubmit={this.handleSubmit} npValidate className="FormFields">
          <div
            className="FormField"
            style={{ marginLeft: "-10%", marginTop: "10%" }}
          >
            <label className="" htmlFor="name">
              Full Name
            </label>
            <input
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                color: "black",
                outline: "none",
                borderBottom: "1px solid #445366",
                fontSize: "1em",
                fontWeight: "300",
                paddingBottom: "10px",
                marginTop: "10px"
              }}
              type="text"
              placeholder="Enter your full name"
              className={formErrors.NAME.length > 0 ? "error" : null}
              name="NAME"
              value={this.state.NAME}
              onChange={this.handleChange}
            />
            <div className="errorMessage">
              {formErrors.NAME.length > 0 && <span>{formErrors.NAME}</span>}
            </div>
          </div>

          <div
            className="FormField"
            style={{ marginLeft: "-10%", marginTop: "-4%" }}
          >
            <label htmlFor="email">E-Mail Address</label>
            <input
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                color: "black",
                outline: "none",
                borderBottom: "1px solid #445366",
                fontSize: "1em",
                fontWeight: "300",
                paddingBottom: "10px",
                marginTop: "10px"
              }}
              className={formErrors.EMAIL.length > 0 ? "error" : null}
              type="text"
              id="email"
              placeholder="Enter your email"
              name="EMAIL"
              value={this.state.EMAIL}
              onChange={this.handleChange}
            />
            <div className="errorMessage">
              {formErrors.EMAIL.length > 0 && <span>{formErrors.EMAIL}</span>}
            </div>
          </div>

          <div
            className="FormField"
            style={{ marginLeft: "-10%", marginTop: "-4%" }}
          >
            <label htmlFor="password">Password</label>
            <input
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                color: "black",
                outline: "none",
                borderBottom: "1px solid #445366",
                fontSize: "1em",
                fontWeight: "300",
                paddingBottom: "10px",
                marginTop: "10px"
              }}
              className={formErrors.PASSWORD.length > 0 ? "error" : null}
              type="password"
              placeholder="Enter your password"
              name="PASSWORD"
              value={this.state.PASSWORD}
              onChange={this.handleChange}
              onInput={this.validate}
            />
            <div className="errorMessage">
              {formErrors.PASSWORD.length > 0 && (
                <span>{formErrors.PASSWORD}</span>
              )}
            </div>
          </div>

          <div
            className="FormField"
            style={{ marginLeft: "-10%", marginTop: "-4%" }}
          >
            <label htmlFor="phone_number">Phone Number</label>
            <input
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                color: "black",
                outline: "none",
                borderBottom: "1px solid #445366",
                fontSize: "1em",
                fontWeight: "300",
                paddingBottom: "10px",
                marginTop: "10px"
              }}
              className={formErrors.CONTACT.length > 0 ? "error" : null}
              type="text"
              id="phome_number"
              placeholder="Enter phone number"
              name="CONTACT"
              value={this.state.CONTACT}
              onChange={this.handleChange}
            />
            <div className="errorMessage">
              {formErrors.CONTACT.length > 0 && (
                <span>{formErrors.CONTACT}</span>
              )}
            </div>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20" style={{marginTop:"30%",marginLeft:"-130%"}} onClick={this.submit}>
              Sign Up
            </button>
            {""}
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SignUpForm);
