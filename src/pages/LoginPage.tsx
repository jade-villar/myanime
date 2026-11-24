import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../services/auth";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await loginUser(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="login-page">
      <p className="login-page__title">Login to MyAnime</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form__inputs">
          <input
            className="login-form__input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <div className="login-form__password-input">
            <input
              className="login-form__input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <img
              className="login-form__toggle"
              src="/eye.svg"
              title="Show password"
              onClick={() => setShowPassword(!showPassword)}
              onMouseLeave={() => setShowPassword(false)}
            />
          </div>
        </div>

        <p className="login-form__error">{error}</p>

        <button type="submit">Login</button>
      </form>

      <div className="login-page__register">
        <p className="login-page__register-text">Don't have an account?</p>
        <Link className="login-page__register-link" to={"/register"}>
          Register
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;
