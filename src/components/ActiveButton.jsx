import { FiUploadCloud } from "react-icons/fi";

export default function ActiveButton({ id, onActive }) {
  return (
    <button className="active-button" onClick={() => onActive(id)}>
      <FiUploadCloud />
    </button>
  );
}
