import { FiTrash } from "react-icons/fi";

export default function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="delete-button"
      onClick={() => confirm("Kamu yakin ingin menghapus?") && onDelete(id)}>
      <FiTrash />
    </button>
  );
}
