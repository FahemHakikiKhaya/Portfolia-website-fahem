import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import FeedMap from "../../Home/feed/FeedMap";
import FeedCard from "../../../component/feedcard/FeedCard";

function DisplayUpdate(props) {
  const { page, maxPage, itemPerPage } = props.paginationState;
  const { setPaginationState, paginationState } = props;
  const btnPrevPageHandler = () => {
    if (page > 1) setPaginationState({ ...paginationState, page: page - 1 });
  };

  const btnNextPageHandler = () => {
    if (page < maxPage)
      setPaginationState({ ...paginationState, page: page + 1 });
  };

  return (
    <div className="col-8 border-bottom border-top border-end border-3 border-dark">
      <div>
        <FeedCard feed={props.feed[0]} />
      </div>
      <div className="mt-2 mb-2">
        <div className="d-flex flex-row justify-content-center">
          <button
            onClick={btnPrevPageHandler}
            className={`btn btn-dark ${page === 1 && "disabled"}`}
          >
            {"<"}
          </button>
          <div className="text-center mx-3">
            Page {page} of {maxPage}
          </div>
          <button
            onClick={btnNextPageHandler}
            className={`btn btn-dark ${page === maxPage && "disabled"}`}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayUpdate;
