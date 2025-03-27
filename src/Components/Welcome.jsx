import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/signin");
  }
  function handlesecond() {
    navigate("/login");
  }
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div style={{ marginLeft: "15px", marginTop: "350px" }}>
        <h2 style={{ fontWeight: "bold" }}>Welcome To Popx</h2>
        <p style={{ color: "gray" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor{" "}
        </p>
        <span
          onClick={handleclick}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "purple",
            color: "white",
            borderRadius: "5px",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            width: "300px",
          }}
        >
          Create Account
        </span>
        <br />
        <span
          onClick={handlesecond}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "purple",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
            textAlign: "center",
            width: "300px",
          }}
        >
          Already Registered? Login
        </span>
      </div>
    </div>
  );
}
