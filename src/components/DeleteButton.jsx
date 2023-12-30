import { FiTrash } from "react-icons/fi";
import PropTypes from "prop-types";
export default function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="delete-button"
      onClick={() => confirm("Kamu yakin ingin menghapus?") && onDelete(id)}>
      <FiTrash />
    </button>
  );
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func,
};
