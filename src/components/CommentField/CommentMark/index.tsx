import { useState } from "react";
import { CommentType } from "../../../types";
import "./index.css";

interface CommentMarkProps {
  comment: CommentType;
}

const CommentMark = ({ comment }: CommentMarkProps) => {
  return (
    <div
      onMouseEnter={() => console.log("mouse enter")}
      onMouseLeave={() => console.log("mouse leave")}
      className="comment-mark"
      style={{
        top: comment.top,
        left: comment.left,
        zIndex: comment.isOpen ? 2 : 1,
        opacity: comment.isOpen ? 1 : 0.8,
        transition: "all 0.2s ease-in-out"
      }}
    >
      <div className="comment-mark__reaction">{comment.reaction}</div>
    </div>
  );
};

export default CommentMark;
