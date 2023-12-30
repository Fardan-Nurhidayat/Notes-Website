import { FiUploadCloud } from "react-icons/fi";
import propTypes from "prop-types";
export default function ActiveButton({ id, onActive }) {
  return (
    <button className="active-button" onClick={() => onActive(id)}>
      <FiUploadCloud />
    </button>
  );
}

ActiveButton.propTypes = {
  onActive: propTypes.func,
};
