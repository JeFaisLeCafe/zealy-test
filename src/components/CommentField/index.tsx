import { useState } from "react";
import { CommentType } from "../../types";
import "./index.css";

interface CommentFieldProps {
  comment: CommentType;
  discardComment: (comment: CommentType) => void;
  saveComment: (comment: CommentType) => void;
}

const reactions = ["👍", "👎", "👏", "🤔", "❤️"];

const CommentField = ({
  comment,
  discardComment,
  saveComment
}: CommentFieldProps) => {
  const top = comment.top > 140 ? comment.top - 140 : comment.top + 40;
  const left = comment.left > 220 ? comment.left - 220 : comment.left + 40;

  const [reaction, setReaction] = useState(comment.reaction);
  const [text, setText] = useState(comment.text);

  const handleSave = () => {
    const newComment = {
      ...comment,
      reaction,
      text,
      isEditing: false,
      isOpen: false
    };

    saveComment(newComment);
  };

  return (
    <div
      className="comment-field"
      style={{
        top,
        left
      }}
    >
      <div className="comment-field__reactions">
        {reactions.map((r) => (
          <div
            key={r}
            className={`comment-field__reaction ${
              reaction === r ? "comment-field__reaction--active" : ""
            }`}
            onClick={() => setReaction(r)}
          >
            {r}
          </div>
        ))}
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
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
        <button onClick={handleSave} className="comment-field__save">
          Save
        </button>
      </div>
    </div>
  );
};

export default CommentField;
