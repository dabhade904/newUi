import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import '../footer/footer.css'
export default function ButtonAppBar() {
  return (
    <div className="">
      <AppBar position="static" style={{ backgroundColor: "#2E1D1E" }}>
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              fontFamily: "Arial, Helvetica, sans- serif",
              fontSize: "15px",
              marginLeft: "80px"
            }}
          >
            Copyright © 2020, eBookstore Private Limited. All Rights Reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
