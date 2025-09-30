import React from "react";
import "./EmptyList.css";
import { MdContentPasteSearch } from "react-icons/md";
const EmptyList = () => {
  return (
    <div className="emptyList-wrap">
      <img src="src\Components\EmptyList\search.gif" alt="empty" />
    </div>
  );
};

export default EmptyList;
