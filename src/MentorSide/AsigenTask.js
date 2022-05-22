import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AsigenTask() {
  return (
    <div className="box">
    <div className="container form-cont  ">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-7 d-flex justify-content-center flex-column align-items-center flex-colu  ">

                           <h2 className="text-center text-primary"> Create Task </h2>

          <TextField style={{ width: "100%" }} className="mb-5" type="date" />{" "}
          <br />
          <TextField
            style={{ width: "100%" }}
            className="mb-5"
            label="Taks Link Here"
            type="text"
          />
          <Button className="mb-5" variant="outlined">Send Task</Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AsigenTask;
