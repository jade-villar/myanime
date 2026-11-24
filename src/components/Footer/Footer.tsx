import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { getUserProfile } from "../../services/user";
import { logoutUser } from "../../services/auth";
import "./Footer.css";

function Footer() {
  const today = new Date();
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user) return;

    async function load() {
      const response = await getUserProfile(user.uid);
      setProfile(response);
    }

    load();
  }, [user]);

  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__meta">
          <p className="footer__brand">MyAnime</p>
          <p className="footer__disclaimer">
            Anime data provided by MyAnimeList via Jikan API.
          </p>
          <p className="footer__copy">&copy; {today.getFullYear()} MyAnime</p>
        </div>

        <div className="footer__auth">
          <p className="footer__auth-title">Account</p>
          {user ? (
            <>
              <Link
                className="footer__link footer__link--email"
                title={profile?.username}
                to={"/my-list"}
              >
                {profile?.email}
              </Link>
              <Link
                className="footer__link footer__link--logout"
                onClick={logoutUser}
                to={"/"}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                className="footer__link footer__link--register"
                to={"/register"}
              >
                Create Account
              </Link>
              <Link className="footer__link footer__link--login" to={"/login"}>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
