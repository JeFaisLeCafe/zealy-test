import { useState } from "react";
import "./App.css";
import { CommentType } from "./types";
import Comment from "./components/Comment";

function App() {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isCommenting, setIsCommenting] = useState(false);

  const saveComment = (comment: CommentType) => {
    const newState = comments.map((c) => {
      if (c.timestamp === comment.timestamp) {
        return comment;
      }

      return c;
    });

    setComments(newState);
    setIsCommenting(false);
  };

  const discardComment = (comment: CommentType) => {
    const newState = comments.filter((c) => c.timestamp !== comment.timestamp);
    setComments(newState);
    setIsCommenting(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    console.log("handleClick", e);
    if (isCommenting) {
      return;
    }

    const comment = {
      timestamp: e.timeStamp,
      isEditing: true,
      isOpen: true,
      left: e.clientX,
      top: e.clientY
    };

    const newState = [...comments, comment];
    setComments(newState);
    setIsCommenting(true);
  };

  return (
    <div className="container" onClick={handleClick}>
      <div className="section yellow" />
      <div className="section pink" />
      <div className="section orange" />

      {comments.map((comment) => (
        <Comment
          comment={comment}
          saveComment={saveComment}
          discardComment={discardComment}
          key={comment.timestamp}
        />
      ))}
    </div>
  );
}

export default App;
