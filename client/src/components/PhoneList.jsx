import React from "react";
import { Link } from "react-router-dom";

const PhoneList = ({ phones }) => {
  return (
    <div>
      {phones.map((eachPhone) => {
        return (
          <div key={eachPhone.id}>
            <Link to={`/phones/${eachPhone._id}`}>
              <h3>
                {eachPhone.name} ({eachPhone.manufacturer})
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PhoneList;
