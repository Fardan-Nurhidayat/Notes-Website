import React from "react";
import PropType from "prop-types";
import NotesItemBody from "./NotesItemBody";
import ArchivedButton from "./ArchivedButton";
import DeleteButton from "./DeleteButton";
import ActiveButton from "./ActiveButton";

export default function NotesItem({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  onActive,
  archived,
}) {
  return (
    <div className="note-item">
      <NotesItemBody title={title} body={body} createdAt={createdAt} id={id} />

      {archived ? (
        <ActiveButton id={id} onActive={onActive} />
      ) : (
        <ArchivedButton id={id} onArchive={onArchive} />
      )}
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

NotesItem.propTypes = {
  id: PropType.string,
  title: PropType.string,
  body: PropType.string,
  createdAt: PropType.string,
  onDelete: PropType.func,
  onArchive: PropType.func,
  onActive: PropType.func,
  archived: PropType.bool,
};
