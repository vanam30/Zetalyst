import React from "react";
import "./Role.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
const Role = () => {
  return (
    <>
      <div className="body" style={{ backgroundColor: "#002A5C" }}>
        <div className="container" style={{ padding: "30px" }}>
          <h2>Pick your role</h2>
          <div className="row">
            <div className="col-lg ">
              <MDBCard
                style={{ width: "400px", height: "380px", textAlign: "center" }}
              >
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                  position="top"
                  alt="..."
                />
                <MDBCardBody className="cardbody">
                  <MDBCardTitle>Influencer Profile </MDBCardTitle>
                  <MDBBtn className="btn btn-dark" href="/"></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col-lg" style={{ marginLeft: "250px" }}>
              <MDBCard
                style={{ width: "400px", height: "380px", textAlign: "center" }}
              >
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                  position="top"
                  alt="..."
                />
                <MDBCardBody className="cardbody">
                  <MDBCardTitle>Business Profile </MDBCardTitle>
                  <MDBBtn className="btn btn-dark" href="/"></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <MDBBtn
              className="mb-2 text-center save"
              size="lg"
              style={{ backgroundColor: "#FF6F00" }}
            >
              Save and Next
            </MDBBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Role;
