import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import NavBar from "../../../component/navigation/NavBar";
import DisplayUpdate from "./DisplayUpdate";
import Manager from "./Manager";
import Header from "../Heading/Heading";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MuiNavBar from "../../../component/navigation/muiNavBar";

//CSS OVERFLOW

function Index() {
  const role = useSelector((state) => state.auth.role);
  const [feeds, setFeeds] = useState([]);
  const [slicedFeeds, setSlicedFeeds] = useState([]);
  const [paginationState, setPaginationState] = useState({
    page: 1,
    maxPage: 0,
    itemPerPage: 1,
  });

  const fetchFeeds = (e) => {
    axios
      .get("/feeds")
      .then((res) => {
        const { data } = res;
        setFeeds(data);
        if (e == "add") {
          setPaginationState({
            ...paginationState,
            page: Math.ceil(data.length / paginationState.itemPerPage),
            maxPage: Math.ceil(data.length / paginationState.itemPerPage),
          });
        }
        if (e == "delete") {
          setPaginationState({
            ...paginationState,
            page: paginationState.page - 1,
            maxPage: Math.ceil(data.length / paginationState.itemPerPage),
          });
        } else {
          setPaginationState({
            ...paginationState,
            maxPage: Math.ceil(data.length / paginationState.itemPerPage),
          });
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  useEffect(() => {
    sliceData();
  }, [paginationState]);

  const sliceData = () => {
    const { page, itemPerPage } = paginationState;
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const slicedTodos = feeds.slice(startIndex, endIndex);
    setSlicedFeeds(slicedTodos);
  };

  const updateData = (formState) => {
    const { id } = slicedFeeds[0];
    axios
      .patch(`/feeds/${id}`, formState)
      .then((res) => {
        fetchFeeds();
      })
      .catch((err) => console.log(err));
  };

  const addNewData = (data) => {
    const { image, month, date, year, desc, title } = data;
    const newFeed = {
      id: new Date().getTime(),
      image,
      month,
      date,
      year,
      desc,
      title,
    };
    axios
      .post("/feeds", newFeed)
      .then((res) => {
        fetchFeeds("add");
        console.log(paginationState.page);
      })
      .catch((error) => console.log({ error }));
  };

  const deleteData = (data) => {
    axios
      .delete(`feeds/${data.id}`)
      .then((res) => {
        fetchFeeds("delete");
      })
      .catch((error) => console.log({ error }));
  };

  if (role !== "Admin") return <Navigate to="/" replace />;
  return (
    <div className="container pt-5 mt-5">
      <div>
        <Header />
      </div>
      {slicedFeeds.length && (
        <div className="d-flex row mx-0 ">
          <Manager
            updateData={updateData}
            slicedFeeds={slicedFeeds}
            paginationState={paginationState}
            addNewData={addNewData}
            deleteData={deleteData}
          />
          <DisplayUpdate
            feed={slicedFeeds}
            paginationState={paginationState}
            setPaginationState={setPaginationState}
          />
        </div>
      )}
    </div>
  );
}

export default Index;
