// import React from 'react'

import { redirect } from "react-router-dom";

import { useLocation } from "react-router-dom";

export default function Account() {
  const name = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");

  // Optionally, you can use useLocation to access any error message
  const location = useLocation();
  const errorMessage = location.state?.errorMessage;

  return (
    <>
      <h2 style={{ marginLeft: "26px" }}>Account Settings</h2>
      {errorMessage && (
        <p style={{ color: "red", marginLeft: "20px" }}>{errorMessage}</p>
      )}
      <div
        style={{
          display: "flex",
          backgroundColor: "lightgray",
          alignItems: "flex-start",
          flexDirection: "column",
          paddingLeft: "20px",
          marginLeft: "20px",
          marginRight: "20px",
          borderBottom: "2px dotted gray",
        }}
      >
        <span style={{ display: "flex", alignItems: "flex-start" }}>
          <img
            src="https://i.pravatar.cc/100?u=zz"
            alt="Jack"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div style={{ marginLeft: "10px" }}>
            <h3 style={{ marginTop: "10px" }}>{name}</h3>
            <p style={{ marginTop: "5px" }}>{email}</p>
          </div>
        </span>
        <br />
        <p style={{ marginLeft: "20px" }}>Hello welcome blah blah</p>
      </div>
      <div
        style={{
          paddingLeft: "20px",
          marginLeft: "20px",
          marginRight: "20px",
          background: "lightgray",
          borderBottom: "2px dotted gray",
          height: "100vh",
        }}
      ></div>
      <div
        style={{
          paddingLeft: "20px",
          marginLeft: "20px",
          marginRight: "20px",
          background: "lightgray",
          height: "50px",
        }}
      ></div>
    </>
  );
}

export const action = async ({ request }) => {
  const formDate = await request.formData();
  const data = Object.fromEntries(formDate);
  if (!data.fullName || !data.email || !data.password) {
    return { errorMessage: "All fields are required." };
  }
  localStorage.setItem("fullName", data.fullName);
  localStorage.setItem("email", data.email);
  localStorage.setItem("password", data.password);
  return redirect("/account");
};
