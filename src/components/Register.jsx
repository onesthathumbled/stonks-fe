import { useState, useEffect } from "react";
import "../styles/Login.css";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      console.log(`Complete the details`);
    } else {
      const userData = {
        email,
        password,
      };

      await dispatch(register(userData));
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/login");
    }
  };

  useEffect(() => {
    if (auth.user?.data?.confirmed_at) {
      navigate("/dashboard/main");
    }
  }, [auth.user, navigate]);

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="Title">Register</div>

        <div className="Form-Group">
          <label className="Label">Email</label>
          <input
            className="Input"
            type="email"
            value={email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div className="Form-Group">
          <label className="Label">Password</label>
          <input
            className="Input"
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
          />
        </div>

        <div className="Form-Group">
          <label className="Label">Confirm password</label>
          <input
            className="Input"
            type="password"
            value={confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
        </div>

        <button className="LoginButton" type="submit">
          Register
        </button>

        <div className="Option">
          <Link to="/" className="Option-B">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
