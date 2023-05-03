import { Fragment } from "react";
import CommentField from "../CommentField";
import CommentMark from "../CommentField/CommentMark";
import { CommentType } from "../../types";

interface CommentProps {
  comment: CommentType;
  discardComment: (comment: CommentType) => void;
  saveComment: (comment: CommentType) => void;
}

const Comment = ({ comment, discardComment, saveComment }: CommentProps) => {
  return (
    <Fragment key={comment.timestamp}>
      <CommentMark comment={comment} />
      {comment.isOpen && (
        <CommentField
          comment={comment}
          discardComment={discardComment}
          saveComment={saveComment}
        />
      )}
    </Fragment>
  );
};

export default Comment;
