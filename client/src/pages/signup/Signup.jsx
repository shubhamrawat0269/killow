import { useState } from "react";
import styles from "./Signup.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [userSignupData, setUserSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleUserSignUp = (e) => {
    const { name, value } = e.target;

    setUserSignupData({
      ...userSignupData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Api Call
    const API_URL = `http://localhost:8082/auth/signup`;
    try {
      const res = await axios.post(API_URL, userSignupData);
      // console.log(res);

      if (res.status === 201) {
        toast.success(res.data.message);
        navigate("/sign-in");
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
      setUserSignupData({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className={styles.signupSection}>
      <div className={styles.signupContainer}>
        <div className={styles.signupTitle}>
          <h2 className={styles.heading}>Registration Form</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={userSignupData.username}
              onChange={handleUserSignUp}
              className={styles.signupInputBox}
              autoComplete="off"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={userSignupData.email}
              onChange={handleUserSignUp}
              className={styles.signupInputBox}
              autoComplete="off"
            />
          </div>

          <div className="mb-5 relative">
            <input
              type="password"
              name="password"
              value={userSignupData.password}
              onChange={handleUserSignUp}
              placeholder="Password"
              className={styles.signupInputBox}
              autoComplete="off"
            />
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.signupBtn}>Signup</button>
            {/* <button className={styles.googleBtn}>Continue with Google</button> */}
          </div>
        </form>
        <p className={styles.navigateToLoginSection}>
          Already have an account ?{" "}
          <span className="text-slate-400 hover:text-slate-900">
            <Link to="/sign-in">Click to login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
