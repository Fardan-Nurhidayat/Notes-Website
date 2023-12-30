import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import ArchivedPage from "../pages/ArchivedPage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/404Page";
function App(props) {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Notes App</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage id={props.id} />} />
          <Route path="/archives" element={<ArchivedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
