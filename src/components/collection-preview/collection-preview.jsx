import React from "react";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  </div>
);
