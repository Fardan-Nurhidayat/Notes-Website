import React from "react";
import { useSearchParams } from "react-router-dom";
import {
  deleteNote,
  getActiveNotes,
  archiveNote,
  getNote,
} from "../utils/local-data";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import InputNotes from "../components/InputNotes";
import PropTypes from "prop-types";

export default function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchieveHandler = this.onArchieveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
  }

  onArchieveHandler(id) {
    archiveNote(id);
    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter(note => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar
          keyword={this.state.keyword}
          onKeywordChange={this.onKeywordChangeHandler}
        />
        <NotesList
          notes={notes}
          onArchive={this.onArchieveHandler}
          onDelete={this.onDeleteHandler}
          onActive={this.onActiveHandler}
        />
        <InputNotes />
      </section>
    );
  }
}
console.log(getNote("notes-1"));
console.log(getActiveNotes());

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
  keyword: PropTypes.string,
  notes: PropTypes.array,
  onArchieveHandler: PropTypes.func,
  onDeleteHandler: PropTypes.func,
};
