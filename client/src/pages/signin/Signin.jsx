import { useState } from "react";
import styles from "./Signin.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [userSigninData, setUserSigninData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleUserSignIn = (e) => {
    const { name, value } = e.target;

    setUserSigninData({
      ...userSigninData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Api Call
    const API_URL = `http://localhost:8082/auth/signin`;
    try {
      const res = await axios.post(API_URL, userSigninData);
      console.log(res);

      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
      setUserSigninData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className={styles.signinSection}>
      <div className={styles.signinContainer}>
        <div className={styles.signinTitle}>
          <h2 className={styles.heading}>Signin Form</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={userSigninData.email}
              onChange={handleUserSignIn}
              className={styles.signinInputBox}
              autoComplete="off"
            />
          </div>

          <div className="mb-5 relative">
            <input
              type="password"
              name="password"
              value={userSigninData.password}
              onChange={handleUserSignIn}
              placeholder="Password"
              className={styles.signinInputBox}
              autoComplete="off"
            />
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.signinBtn}>Signin</button>
          </div>
        </form>
        <p className={styles.navigateToSignupSection}>
          Don't have an account ?{" "}
          <span className="text-slate-400 hover:text-slate-900">
            <Link to="/sign-up">Click to Signup</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
