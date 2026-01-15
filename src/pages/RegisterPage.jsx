import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { registerUser } from "../services/auth";
import "./RegisterPage.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await registerUser(email, password, username);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="register-page">
      <p className="register-page__title">Create Account</p>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-form__inputs">
          <input
            className="register-form__input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />

          <input
            className="register-form__input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <div className="register-form__password-input">
            <input
              className="register-form__input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <img
              className="register-form__toggle"
              src="/eye.svg"
              title="Show password"
              onClick={() => setShowPassword(!showPassword)}
              onMouseLeave={() => setShowPassword(false)}
            />
          </div>
        </div>

        <p className="register-form__error">{error}</p>

        <button type="submit">Create</button>
      </form>

      <div className="register-page__login">
        <p className="register-page__login-text">Already have an account?</p>
        <Link className="register-page__login-link" to={"/login"}>
          Login
        </Link>
      </div>
    </main>
  );
}

export default RegisterPage;
