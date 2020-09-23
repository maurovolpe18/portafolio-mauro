import {
  faAngleDoubleRight,
  faBook,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light d-flex">
        <NavLink
          activeClassName="active"
          className="nav-item navbar-brand "
          exact
          to="/"
        >
          <span className="link-text logo-text">Maurizio Volpe</span>
          <FontAwesomeIcon
            className="navbar__icon-logo"
            icon={faAngleDoubleRight}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          type="button"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleShow}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end h2 ${
            show ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav" onClick={handleShow}>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/cursos"
            >
              <div>
                <FontAwesomeIcon
                  className="navbar__icon"
                  icon={faGraduationCap}
                />
                <span class="link-text">Cursos</span>
              </div>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/proyectos"
            >
              <FontAwesomeIcon className="navbar__icon" icon={faBook} />
              <span class="link-text">Proyectos</span>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/contacto"
            >
              <FontAwesomeIcon className="navbar__icon" icon={faEnvelope} />
              <span class="link-text">Contacto</span>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};
