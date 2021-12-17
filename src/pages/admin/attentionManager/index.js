import React, { useState, useEffect } from "react";
import NavBar from "../../../component/navigation/NavBar";
import DisplayUpdate from "./DisplayUpdate";
import Manager from "./Manager";
import axios from "../../../utils/axios";
import { Navigate } from "react-router-dom";
import Header from "../Heading/Heading";
import { useSelector } from "react-redux";

function Index() {
  const [attention, setAttention] = useState([]);
  const role = useSelector((state) => state.auth.role);
  const FetchAttention = async () => {
    try {
      const res = await axios.get("/attentions");
      const { data } = res;
      setAttention(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    FetchAttention();
  }, []);

  const updateData = (formState) => {
    axios
      .patch(`/attentions/1`, formState)
      .then((res) => {
        FetchAttention();
      })
      .catch((err) => console.log(err));
  };

  if (role !== "Admin") return <Navigate to="/" replace />;
  return (
    <div className="container">
      <div>
        <NavBar />
        <Header />
      </div>
      <div className="d-flex row mx-0 ">
        <Manager updateData={updateData} />
        <DisplayUpdate attention={attention} />
      </div>
    </div>
  );
}

export default Index;
