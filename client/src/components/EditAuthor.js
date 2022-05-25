import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Edit.css";

const EditAuthor = (props) => {
  const { id } = useParams();
  const [authorName, setAuthorName] = useState("");
  const [errors, setErrors] = useState({});
  const [authorNotFoundError, setAuthorNotFoundError] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/author/${id}`)
      .then((response) => {
        setAuthorName(response.data.name);
      })
      .catch((err) => {
        setAuthorNotFoundError(`Author not found using that ID`);
      });
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAuthorName("");

    axios
      .put(`http://localhost:8000/api/author/${id}`, { name: authorName })
      .then((response) => {})
      .catch((err) => {
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      {authorNotFoundError ? (
        <h2>
          {authorNotFoundError} <Link to="/new">Click here to add author</Link>
        </h2>
      ) : null}
      <div className="test">
        <Link to="/">Home</Link>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
      </div>
      <button onClick={submitHandler} type="submit" className="btn btn-primary">
        SUBMIT
      </button>
    </form>
  );
};

export default EditAuthor;
