import React from "react";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="notFound-container">
      <samp className="notFound-error">404</samp>
      <p className="notFound-parrafo">
        Oops! lo sentimos Pagina no encontrada.
      </p>
      <a href="/" className="notFound-button">
        Regresar al Home
      </a>
    </div>
  );
};

export default NotFound;
