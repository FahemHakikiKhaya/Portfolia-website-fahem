import React, { useState, useEffect, useDebugValue } from "react";

function Manager(props) {
  const { updateData, slicedFeeds, paginationState, addNewData, deleteData } =
    props;

  const [AddFeed, setAddFeed] = useState(false);
  const [formState, setFormState] = useState({
    image: "",
    month: "",
    date: "",
    year: "",
    desc: "",
    title: "",
  });
  const { image, month, date, year, desc, title } = formState;
  const [newFeed, setNewFeed] = useState({
    image: "",
    month: "",
    date: "",
    year: "",
    desc: "",
    title: "",
  });

  useEffect(() => {
    setFormState(slicedFeeds[0]);
  }, []);

  useEffect(() => {
    setFormState(slicedFeeds[0]);
  }, [slicedFeeds]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSaveButton = () => {
    updateData(formState);
  };

  const onChangeNewFeed = (e) => {
    setNewFeed({ ...newFeed, [e.target.name]: e.target.value });
  };

  const onAddButton = () => {
    addNewData(newFeed);
    setNewFeed({
      image: "",
      month: "",
      date: "",
      year: "",
      desc: "",
      title: "",
    });
  };

  const onClearButton = () => {
    deleteData(slicedFeeds[0]);
  };

  return (
    <div className="col-4 border border-3 border-dark px-0">
      <div className="d-flex column">
        <button
          type="button"
          class="btn btn-primary w-100"
          onClick={() => {
            setAddFeed(false);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          class="btn btn-success w-100"
          onClick={() => {
            setAddFeed(true);
          }}
        >
          Add
        </button>
      </div>
      {AddFeed ? (
        <div className="d-flex row border border-dark w-100 mx-0 ">
          <h4 className="bg-info border border-1 my-auto border-dark align-text">
            Add Feed
          </h4>
          <input
            name="image"
            placeholder="Image"
            type="text"
            value={newFeed.image}
            onChange={onChangeNewFeed}
          />
          <input
            name="month"
            placeholder="Month"
            type="text"
            value={newFeed.month}
            onChange={onChangeNewFeed}
          />
          <input
            name="date"
            placeholder="Date"
            type="text"
            value={newFeed.date}
            onChange={onChangeNewFeed}
          />
          <input
            name="year"
            placeholder="Year"
            type="text"
            value={newFeed.year}
            onChange={onChangeNewFeed}
          />
          <input
            name="desc"
            placeholder="Description"
            type="text"
            value={newFeed.desc}
            onChange={onChangeNewFeed}
          />
          <input
            name="title"
            placeholder="Title"
            type="text"
            value={newFeed.title}
            onChange={onChangeNewFeed}
          />
          <button onClick={onAddButton} className="btn btn-success">
            Add
          </button>
          <button onClick={onClearButton} className="btn btn-danger">
            Delete
          </button>
        </div>
      ) : (
        <div className="d-flex row border border-dark w-100 mx-0 ">
          <h4 className="bg-info border border-1 my-auto border-dark align-text">
            Edit Feed
          </h4>
          <input
            name="image"
            placeholder="Image"
            type="text"
            value={image}
            onChange={handleChange}
          />
          <input
            name="month"
            placeholder="Month"
            type="text"
            value={month}
            onChange={handleChange}
          />
          <input
            name="date"
            placeholder="Date"
            type="text"
            value={date}
            onChange={handleChange}
          />
          <input
            name="year"
            placeholder="Year"
            type="text"
            value={year}
            onChange={handleChange}
          />
          <input
            name="desc"
            placeholder="Description"
            type="text"
            value={desc}
            onChange={handleChange}
          />
          <input
            name="title"
            placeholder="Title"
            type="text"
            value={title}
            onChange={handleChange}
          />
          <button onClick={onSaveButton} className="btn btn-success">
            Save
          </button>
          <button onClick={onClearButton} className="btn btn-danger">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Manager;
