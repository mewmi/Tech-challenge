import React from "react";
import { useState, useEffect } from "react";
import { phoneLoadAll } from "../services/phones";
import PhoneList from "../components/PhoneList";

const PhoneDisplayAllPage = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    phoneLoadAll().then((data) => {
      setPhones(data.phones);
    });
  }, []);

  return (
    <div>
      <h1>Phone List</h1>
      <PhoneList phones={phones} />
    </div>
  );
};

export default PhoneDisplayAllPage;
