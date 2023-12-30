import { useNavigate } from "react-router-dom";
import React from "react";
import { FiCheck } from "react-icons/fi";
import { addNote } from "../utils/local-data";
import PropTypes from "prop-types";

export default function AddPagesWrapper() {
  const navigate = useNavigate();

  const onAddHandler = ({ title, body }) => {
    addNote({ title, body });
    navigate("/");
  };

  return <AddPages onAddNote={onAddHandler} />;
}

class AddPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onBodyChange(e) {
    this.setState({
      body: e.target.value,
    });
  }

  onInputHandler(e) {
    this.setState({
      body: e.target.textContent,
    });
  }

  onAddNote() {
    const { title, body } = this.state;
    this.props.onAddNote({ title, body });
  }

  render() {
    return (
      <>
        <div className="add-new-page__input">
          <input
            onChange={this.onTitleChange}
            type="text"
            placeholder="Catatan Rahasia"
            className="add-new-page__input__title"
            value={this.state.title}
          />
          <div
            className="add-new-page__input__body"
            contentEditable="true"
            data-placeholder="Sebenarnya saya adalah... "
            onInput={this.onInputHandler}></div>
        </div>
        <div className="homepage__action">
          <button onClick={this.onAddNote}>
            <FiCheck className="action" type="button" title="tambah" />
          </button>
        </div>
      </>
    );
  }
}

AddPages.propTypes = {
  onAddNote: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
};
