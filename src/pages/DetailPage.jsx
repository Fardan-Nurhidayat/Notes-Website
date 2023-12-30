import React from "react";
import { useParams } from "react-router-dom";
import propTypes from "prop-types";
import { getNote } from "../utils/local-data";
import NotesDetail from "../components/NotesDetail";

export default function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNote(props.id),
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.setState({
        notes: getNote(this.props.id),
      });
    }
  }

  render() {
    if (this.state.notes === null) {
      return <h1>Catatan tidak ditemukan</h1>;
    }

    console.log(getNote(this.props.id));
    return (
      <section>
        <NotesDetail {...this.state.notes} />
      </section>
    );
  }
}
