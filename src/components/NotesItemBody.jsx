import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import propTypes from "prop-types";
export default function NotesItemBody({ id, title, body, createdAt }) {
  return (
    <>
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      {/* <p>{id}</p> */}
      <p className="note-item__createdAt">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </>
  );
}

NotesItemBody.propTypes = {
  title: propTypes.string,
  body: propTypes.string,
  createdAt: propTypes.string,
};
