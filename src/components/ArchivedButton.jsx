import { FiDownloadCloud } from "react-icons/fi";
import PropType from "prop-types";
export default function ArchivedButton({ id, onArchive }) {
  return (
    <button className="archive-button" onClick={() => onArchive(id)}>
      <FiDownloadCloud />
    </button>
  );
}

ArchivedButton.propTypes = {
  id: PropType.string,
  onArchive: PropType.func,
};
