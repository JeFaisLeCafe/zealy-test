import { useState } from "react";
import { CommentType } from "../../../types";
import "./index.css";

interface CommentMarkProps {
  comment: CommentType;
}

const CommentMark = ({ comment }: CommentMarkProps) => {
  const [isOpen, setIsOpen] = useState(comment.isOpen);
  return (
    <>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
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

      {isOpen && (
        <div className="comment-mark__tooltip">
          {comment.text}
          {new Date(comment.timestamp).toLocaleString()}
        </div>
      )}
    </>
  );
};

export default CommentMark;
