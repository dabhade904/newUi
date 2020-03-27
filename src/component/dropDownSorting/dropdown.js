import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
export default class MenuPopupState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field : "Sort By Relevance"
    }
    this.ListofBooks = React.createRef();
  }

  highToLowClick = event => {
    this.setState({field : "highToLow"})
    this.props.sort("highToLow")
  };

  lowToHighClick = event => {
    this.setState({field : "lowToHigh"})
    this.props.sort("lowToHigh")
  };

  sortArrivalClick = event => {
    this.setState({field : "sortArrival"})
    this.props.sort("sortArrival")
  };
  render() {
    return (
      <div className="dropdown" style={{ marginLeft: "77%", marginTop:"2%" }}>
        <h4 style={{marginLeft:"-275%" ,color:"grey"}}>
          Books ( {this.props.bookcount} )
        </h4>

        <PopupState variant="popover" popupId="demo-popup-menu">
          {popupState => (
            <React.Fragment>
              <Button
                {...bindTrigger(popupState)}
                style={{
                  marginTop: "-80px",
                  width: "50%",
                  fontFamily: "Times New Roman",
                  fontSize: 10,
                  borderStyle: "ridge",
                  borderWidth: "thin",
                  borderColor: "grey"
                }}
              >
                {this.state.field}
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  style={{ fontFamily: "Times New Roman", fontSize: 12 }}
                  onClick={this.highToLowClick}
                >
                  High-Low
                </MenuItem>
                <MenuItem
                  style={{ fontFamily: "Times New Roman", fontSize: 12 }}
                  onClick={this.lowToHighClick}
                >
                  Low-High
                </MenuItem>
                <MenuItem
                  style={{ fontFamily: "Times New Roman", fontSize: 12 }}
                  onClick={this.sortArrivalClick}
                >
                  Newest Arrival
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    );
  }
}
