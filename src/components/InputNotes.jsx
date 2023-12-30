import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
export default function InputNotes() {
  return (
    <div className="homepage__action">
      <Link to={"/add"}>
        <button>
          <FiPlus className="action" type="button" title="tambah" />
        </button>
      </Link>
    </div>
  );
}
