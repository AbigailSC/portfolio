import React from "react";
import { Link } from "react-router-dom";

export const Project = ({ name, img, index }) => {
  return (
    <div>
      <h3>Project {index}</h3>
      <h3>// {name}</h3>
      <div>
        <img src={img} alt="image project" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis adipisci suscipit
            totam temporibus expedita voluptates quam
          </p>
          <Link to={name}>
            <button>viewProject</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
