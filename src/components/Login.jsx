import { useState, useEffect } from "react";
import "../styles/Login.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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

      dispatch(login(userData));
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
        <div className="Title">Login</div>

        <div className="Form-Group">
          <label className="Label">Email</label>
          <input
            className="Input"
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div className="Form-Group">
          <label className="Label">Password</label>
          <input
            className="Input"
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
        </div>

        <button className="LoginButton" type="submit">
          Login
        </button>

        <div className="Option">
          <Link to="/register" className="Option-B">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
