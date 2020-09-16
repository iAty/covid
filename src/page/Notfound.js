/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from "react";
import { Navbar } from "../components";

const divSize = {
  fontSize: "18px",
};

const NotfoundPage = () => (
  <Fragment>
    <Navbar />
    <div className="container">
      <div className="row py-5 justify-content-between align-items-center">
        <div className="col-md-12" style={divSize}>
          <h1>404 hibaoldal</h1>
          <p>
            <strong>Lehet valamit elgépeltél</strong>
          </p>
        </div>
      </div>
    </div>
    <footer>
      <div className="container">
        <p className="text-center mb-0 p-4">
          <a className="font-weight-bold" href="https://facebook.com/iAty/">
            
          </a>
          &nbsp;&nbsp;Forrás:
          <a className="font-weight-bold" href="https://corona.lmao.ninja/v2">
            API 1
          </a>
          <a className="font-weight-bold" href="https://covid19.mathdro.id/api">
            API 2
          </a>
          <a
            className="font-weight-bold"
            href="https://www.flaticon.com/authors/ultimatearm"
          >
            IKONPACK
          </a>
        </p>
      </div>
    </footer>
  </Fragment>
);

export default NotfoundPage;
