import React from "react";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div className="not-found-pages">
      <h1>404</h1>
      <h2 className="not-found-pages__title">Page Not Found</h2>
      <p className="not-found-pages__description">
        Page yang kamu cari mungkin sudah tidak ada ata kamu salah memasukan URL
      </p>
      <Link to="/">
        <button className="not-found-pages__button">Go Home</button>
      </Link>
    </div>
  );
}
