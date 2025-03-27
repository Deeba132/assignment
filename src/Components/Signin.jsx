// import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const navig = useNavigate();
  const email = localStorage.getItem("email");
  const pass = localStorage.getItem("password");
  function handle(e) {
    e.preventDefault();
    if (
      e.target.elements.email.value === email &&
      e.target.elements.password.value === pass
    ) {
      navig("/account");
    } else {
      throw new Error("email or password is wrong");
    }
  }
  return (
    <>
      <form
        onSubmit={handle}
        style={{
          backgroundColor: "lightgray",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100vh",
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "0",
          padding: "0",
        }}
      >
        <div style={{ marginLeft: "20px" }}>
          <h2>
            Signin to your <br /> Popx account
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor{" "}
          </p>
          {/* Email Address */}
          <fieldset
            style={{
              border: "2px solid gray",
              borderRadius: "5px",
              padding: "0",
              marginBottom: "15px",
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            <legend
              style={{
                fontSize: "16px",
                color: "purple",

                padding: "0 5px", // Adds spacing around the legend text
                transform: "translateY(-10%)", // Keeps it visually appealing
              }}
            >
              Email Address
            </legend>
            <input
              type="email"
              name="email"
              style={{
                display: "flex",
                // Centers horizontally
                alignItems: "flex-start", // Centers vertically with flexbox
                textAlign: "left",
                paddingLeft: "10px",
                marginTop: "0px",
                marginBottom: "4px",
                maxWidth: "300px",
                fontSize: "16px",
                outline: "none",
                border: "none",
                backgroundColor: "lightgray",
              }}
            />
          </fieldset>

          {/* Password */}
          <fieldset
            style={{
              border: "2px solid gray",
              borderRadius: "5px",
              padding: "0",
              marginBottom: "15px",
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            <legend
              style={{
                fontSize: "16px",
                color: "purple",

                padding: "0 5px", // Adds spacing around the legend text
                transform: "translateY(-10%)", // Keeps it visually appealing
              }}
            >
              Password
            </legend>
            <input
              type="password"
              name="email"
              style={{
                display: "flex",
                // Centers horizontally
                alignItems: "flex-start", // Centers vertically with flexbox
                textAlign: "left",
                paddingLeft: "10px",
                marginTop: "0px",
                marginBottom: "4px",
                maxWidth: "300px",
                fontSize: "16px",
                outline: "none",
                border: "none",
                backgroundColor: "lightgray",
              }}
            />
          </fieldset>
          <span
            onClick={() => {
              document.querySelector("form").dispatchEvent(new Event("submit"));
            }}
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "purple",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
              maxWidth: "500px",
            }}
          >
            Login
          </span>
        </div>
      </form>
      <style>
        {`
          @media (max-width: 768px) {
            form {
              margin: 10px;
              padding: 0;
            }

            h2 {
              font-size: 20px;
            }

            p {
              font-size: 12px;
            }

            input {
              width: 100%;
            }

            span {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}
