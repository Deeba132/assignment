import { useState, useEffect } from "react";
import { Form, useActionData } from "react-router-dom";

export default function Sigin() {
  const actionData = useActionData(); // Get the action data, including any error messages
  const [formData, setFormData] = useState({
    fullName: "",
    phonenumber: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (actionData?.errorMessage) {
      setError(actionData.errorMessage); // Set error message from action
    } else {
      setError(""); // Clear error message if no error
    }
  }, [actionData]);

  // Check if all fields are filled
  const isFormValid =
    formData.fullName &&
    formData.phonenumber &&
    formData.email &&
    formData.password;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Form
        style={{
          height: "100vh",
          backgroundColor: "lightgray",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
          margin: "0 20px",
        }}
        method="post"
        action="/account"
      >
        <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "purple" }}>
          Create Your Account
        </h2>

        {/* Full Name */}
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
              padding: "0 5px",
              transform: "translateY(-10%)",
            }}
          >
            Full Name
          </legend>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={{
              display: "flex",
              alignItems: "flex-start",
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

        {/* Phone Number */}
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
              padding: "0 5px",
              transform: "translateY(-10%)",
            }}
          >
            Phone Number
          </legend>
          <input
            type="number"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            style={{
              display: "flex",
              alignItems: "flex-start",
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
              padding: "0 5px",
              transform: "translateY(-10%)",
            }}
          >
            Email Address
          </legend>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              display: "flex",
              alignItems: "flex-start",
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
              padding: "0 5px",
              transform: "translateY(-10%)",
            }}
          >
            Password
          </legend>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              display: "flex",
              alignItems: "flex-start",
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

        {/* Error Message */}
        {error && (
          <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid} // Disable button if form is not valid
          style={{
            marginTop: "20px",
            display: "inline-block",
            width: "100%",
            padding: "10px",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: isFormValid ? "pointer" : "not-allowed", // Change cursor if disabled
          }}
        >
          Create Account
        </button>
      </Form>
    </div>
  );
}
