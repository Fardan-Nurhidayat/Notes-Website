import React from "react";
import PropTypes from "prop-types";

export default function SearchBar({ keyword, onKeywordChange }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        value={keyword}
        onChange={e => onKeywordChange(e.target.value)}
        placeholder="Cari Berdasarkan nama..."
      />
    </section>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
};
