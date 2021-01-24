import React from "react";

interface Props {
  message: string;
}

const EmptyCard: React.FC<Props> = ({ message }) => {
  return (
    <div className="center">
      <p>{message}</p>
    </div>
  );
};

export default EmptyCard;
