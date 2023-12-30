import React from "react";
import propTypes from "prop-types";
import { showFormattedDate } from "../utils";
export default function NotesDetail({ id, title, body, createdAt }) {
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
    </section>
  );
}

NotesDetail.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  body: propTypes.string,
  createdAt: propTypes.string,
};
