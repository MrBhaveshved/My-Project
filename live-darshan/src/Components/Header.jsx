import React from "react";
import Home from "./Home";
import Jyotrilinga from "./Jyotrilinga";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Header() {
  const Number = {
    "/home": "Home",
    "/Jyotrilinga": "Jyotrilinga",
  };
  const returndata = Object.entries(Number).map((res, i) => {
    return (
      <li className="nav-item" key={i}>
        <Link className="nav-link" to={res[0]}>
          {res[1]}
        </Link>
      </li>
    );
  });
  return (
    <>
      <Router>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">{returndata}</ul>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Live Darshan
                  </a>
                  <ul class="dropdown-menu dropdown-menu-light">
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://youtu.be/qEx99T8wB90"
                      >
                        Shree Sai Baba Live Darshan
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://youtu.be/FD5F0tG2QVQ"
                      >
                        Shree Dwarkadhish Live Darshan
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://youtu.be/OYaX9qGiXO0"
                      >
                        Shree Mahalaxmi Ji Live Darshan
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://youtu.be/okiFDBCKUE4"
                      >
                        Shree Nakalankdham Live Darshan
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.youtube.com/watch?v=SAy1p9RyO4A&ab_channel=SVBC4HINDICHANNELTTD"
                      >
                        Shree Tirupati Balaji Live Darshan
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://youtu.be/y36wyJIrCTA"
                      >
                        Shree Badrinath Dham Live
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://youtu.be/oIT1ynIENt0"
                      >
                        Shree Swaminarayan Temple - Bhuj
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://youtu.be/_Gn6j1qAm5w"
                      >
                        Shree Karnimata Mata Live Darshan
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://youtu.be/iUiwFK-v-68"
                      >
                        Shree Babul Nath Mandir Live Darshan
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
          </nav>
        </div>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Jyotrilinga" element={<Jyotrilinga />}></Route>
        </Routes>
      </Router>
    </>
  );
}
