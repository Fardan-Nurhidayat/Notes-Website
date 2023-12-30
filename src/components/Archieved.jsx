import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NotesList from "./NotesList";
import Navigation from "./Navigation";
import InputNotes from "./InputNotes";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import {
  getArchivedNotes,
  deleteNote,
  getUnArchived,
} from "../utils/local-data";

class ArchivedNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }
  onUnArchiveHandler(id) {
    getUnArchived(id);
    this.setState(() => {
      return {
        notes: getArchivedNotes(),
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
        <h2>Catatan Terarsip</h2>
        <SearchBar
          keyword={this.state.keyword}
          onKeywordChange={this.onKeywordChangeHandler}
        />
        <NotesList
          notes={notes}
          onUnArchive={this.onUnArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </section>
    );
  }
}

console.log(getArchivedNotes());
