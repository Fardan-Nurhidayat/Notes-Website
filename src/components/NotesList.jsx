import React from "react";
import PropTypes from "prop-types";
import NotesItem from "../components/NotesItem";
import { showFormattedDate } from "../utils";
export default function NotesList({
  notes,
  onArchive,
  onDelete,
  onActive,
  archived,
}) {
  return (
    <div className={notes.length === 0 ? "notes-list-empty" : "notes-list"}>
      {notes.length !== 0 ? (
        notes.map(note => (
          <NotesItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={showFormattedDate(note.createdAt)}
            onArchive={onArchive}
            onDelete={onDelete}
            onActive={onActive}
            archived={note.archived}
          />
        ))
      ) : (
        <p className="empty-list">Tidak ada catatan</p>
      )}
    </div>
  );
}
NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
  onActive: PropTypes.func,
  archived: PropTypes.bool,
};
