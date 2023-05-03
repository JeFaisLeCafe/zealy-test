export type CommentType = {
  timestamp: number;
  left: number;
  top: number;
  isOpen?: boolean;
  isEditing: boolean;
  reaction: string;
  text?: string;
};
