import { CommentType } from "../../types";
import "./index.css";

interface CommentFieldProps {
  comment: CommentType;
  discardComment: (comment: CommentType) => void;
  saveComment: (comment: CommentType) => void;
}

const CommentField = ({
  comment,
  discardComment,
  saveComment
}: CommentFieldProps) => {
  const top = comment.top > 140 ? comment.top - 140 : comment.top + 40;
  const left = comment.left > 220 ? comment.left - 220 : comment.left + 40;

  return (
    <div
      className="comment-field"
      style={{
        top,
        left
      }}
    >
      <textarea
        placeholder="A great comment goes here..."
        className="comment-field__textarea"
      />
      <div className="comment-field__actions">
        <button
          className="comment-field__discard"
          onClick={() => discardComment(comment)}
        >
          Discard
        </button>
        <button
          onClick={() => saveComment(comment)}
          className="comment-field__save"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CommentField;
