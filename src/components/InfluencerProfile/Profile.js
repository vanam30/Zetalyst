import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import image from "/home/manav/Desktop/Zetalyst/frontend/src/assets/Ellipse 38.png";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { BsCircleFill } from "react-icons/bs";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile">
      <div class="row">
        <div class="column1" style={{ backgroundColor: "#002A5C" }}>
          <div className="line">
            <ol style={{ listStyle: "none", color: "#F5F5F5",paddingTop:"160px" }}>
              <li
                className="active"
                style={{ color: "#FFFFFF", paddingTop: "40px" }}
              >
                <BsCircleFill color=" #FF6F00" /> About yourself
              </li>
              <li>
                <BsCircleFill color=" #FF6F00" /> Category Details
              </li>
              <li>
                <BsCircleFill color=" #FF6F00" /> Collaborations
              </li>
              <li>
                <BsCircleFill color=" #FF6F00" /> Achievments
              </li>
              <li>
                <BsCircleFill color=" #FF6F00" padding="2px" /> Portfolio
              </li>
            </ol>
          </div>
        </div>
        <div class="column2" style={{ backgroundColor: "#F5F5F5" }}>
          <h1 style={{ color: "red" }}>
            {" "}
            * <h1 style={{ fontSize: "10px" }}>Add Photo</h1>
          </h1>
          <img src={image} alt="Avatar" />
          <MDBRow style={{ backgroundColor: "#F5F5F5", paddingLeft: "20px" }}>
            <MDBCol md="10" className="mb-4">
              <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <h1>Full Name</h1>
                    <MDBInput
                      label="First Middle Last"
                      type="text"
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </MDBCol>
                </MDBRow>
                <h1>Email Address</h1>
                <MDBInput
                  label="Email"
                  type="text"
                  className="mb-4"
                  size="lg"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
                <h1>Phone no.</h1>
                <MDBInput
                  label="Phone"
                  type="text"
                  className="mb-4"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
                <h1>Date.</h1>
                <MDBInput
                  label="DD/MM/YYYY"
                  type="text"
                  className="mb-4"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
                <h1>Location</h1>
                <MDBInput
                  label="Country"
                  type="text"
                  className="mb-4"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
                <h1>Language</h1>
                <MDBInput
                  label="Language"
                  type="text"
                  className="mb-4"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
              </form>
            </MDBCol>
          </MDBRow>
          <div
            className="text-center"
            style={{
              paddingBottom: "20px",
              backgroundColor: "#F5F5F5",
              marginRight: "10px",
            }}
          >
            <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00" }}>
              Save And Next
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
