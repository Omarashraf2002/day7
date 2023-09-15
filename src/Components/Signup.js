import { useState } from "react";
import "../CSS/Signup.css";
const Signup = () => {
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });
  const [errorData, setErrorData] = useState({
    userEmailError: "",
    userPasswordError: "",
  });
  const handleChange = (event) => {
    // setUserdata({ ...userdata, [event.target.name]: event.target.value });
    if (event.target.name == "userEmail") {
      setUserdata({ ...userdata, email: event.target.value });
      setErrorData({
        ...errorData,
        userEmailError:
          event.target.value == 0
            ? "Email is required"
            : event.target.value.includes("@")
            ? ""
            : "Enter a valid Email",
      });
      // let atIndex = email.indexof("@");
      // if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
      //   return false;
      // } else {
      //   return true;
      // }
      // console.log(userdata.email);
    } else if (event.target.name == "userPassword") {
      setUserdata({ ...userdata, password: event.target.value });
      setErrorData({
        ...errorData,
        userPasswordError:
          event.target.value == 0
            ? "Email is required"
            : event.target.value.length > 8
            ? ""
            : "8 characters at least",
      });
    }
  };
  return (
    <>
      <div className="mb-3 w-75 m-auto p-auto">
        <h1 style={{ textAlign: "center" }}>Signup</h1>
        <form>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="userEmail"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={userdata.email}
            onChange={(e) => handleChange(e)}
          />
          <div className="text-danger">{errorData.userEmailError}.</div>
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="userPassword"
            id="exampleFormControlInput2"
            placeholder="at least 8 characters"
            value={userdata.password}
            onChange={(e) => handleChange(e)}
          />
          <div className="text-danger">{errorData.userPasswordError}</div>

          <input
            type="submit"
            className="btn btn-success mt-3"
            value={"SignUp"}
            disabled={
              errorData.userEmailError == "" &&
              errorData.userPasswordError == ""
                ? false
                : true
            }
          />
        </form>
      </div>{" "}
    </>
  );
};

export default Signup;
