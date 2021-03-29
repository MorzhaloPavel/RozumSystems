import React from "react";
import "./DocItem.css";
import { Link } from "react-router-dom";

const DocItem = ({ id, firstName, lastName, middleName, birthDate, index }) => {
  const birth = new Date(birthDate);
  const year = birth.getFullYear();
  const month = birth.getMonth().toString().padStart(2, 0);
  const date = birth.getDate().toString().padStart(2, 0);
  const turning = `${date}.${month}.${year}`;

  return (
    <li>
      <Link to={`/worklog/${id}`} style={{ textDecoration: "none" }}>
        <div className="DocItem">
          <div>{index + 1}</div>
          <div>{id}</div>
          <div>
            {lastName} {firstName} {middleName}
          </div>
          <div>{turning}</div>
        </div>
      </Link>
    </li>
  );
};

export default DocItem;
