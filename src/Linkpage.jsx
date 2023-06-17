import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Linkpage = () => {
  return (
    <>
      <nav>
        <div className="nav-con">
          <Link to="/" className="link" >
           Post
          </Link>
          <Link className="link">About</Link>
          <Link className="link">Contact</Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
