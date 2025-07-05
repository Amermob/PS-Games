import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const NotFound = () => {
  useEffect(() => {
    document.title = "404 Page Not Found";
  });

  return (
    <div className="not-found">
      <div>
        <h2>Page not Found :( </h2>
        <Link to="..">Go Back</Link>
      </div>
      <img src="/src/assets/not-found.png" alt="not-found" />
    </div>
  );
};
